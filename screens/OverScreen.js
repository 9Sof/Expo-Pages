import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { CATEGORIES } from "../data/dummy-data";

const OverScreen = (props) => {
  const paramsId = props.navigation.getParam("id");

  const Category = CATEGORIES.find((category) => category.id === paramsId);

  OverScreen.navigationOptions = {
    headerTitle: Category.title,
    headerStyle: {
      backgroundColor: Category.color,
    },
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
