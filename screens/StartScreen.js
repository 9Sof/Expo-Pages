import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";


const StartScreen = (props) => {
  const Categories = useSelector((state) => state.categories.categories);

  const renderCategory = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridCategories}
        onPress={() =>
          props.navigation.navigate("Over", {
            id: itemData.item.id,
            title: itemData.item.title,
          })
        }
      >
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>StartScreen</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />

      <FlatList
        keyExtractor={(item) => item.id}
        data={Categories}
        renderItem={renderCategory}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    margin: 10,
    padding: 10,
    fontSize: 20,
    color: "#000",
  },
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
  gridCategories: {
    padding: 10,
  },
});

export default StartScreen;
