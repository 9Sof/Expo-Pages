import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";
import { getCategory } from "../store/actions/categories";

const OverScreen = (props) => {
  const paramsId = props.navigation.getParam("id");
  const paramsTitle = props.navigation.getParam("title");
  // const paramsGetCategory = props.navigation.getParam("getCategory");

  const Categories = useSelector((state) => state.categories.categories);
  const Category = Categories.find((category) => category.id === paramsId);

  const dispatch = useDispatch();
  const getCategoryHandler = () => {
    dispatch(getCategory(paramsId));
  };

  React.useEffect(() => {
    props.navigation.setParams({ getCategory: getCategoryHandler });
  }, [paramsId]);

  OverScreen.navigationOptions = {
    headerTitle: paramsTitle,
    headerStyle: {
      backgroundColor: Category.color,
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          color="orange"
          onPress={getCategoryHandler}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Back"
          iconName="ios-arrow-back"
          color="black"
          onPress={() => props.navigation.navigate("Start")}
        />
      </HeaderButtons>
    ),
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>OverScreen</Text>

      <Text>{Category.title}</Text>

      <AntDesign.Button
        name="rightcircleo"
        size={24}
        color="white"
        onPress={() => props.navigation.navigate("Home")}
      >
        HomeScreen
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 30,
    fontFamily: "debrosee",
  },
});

export default OverScreen;
