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

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

const StartScreen = (props) => {

  const availableCategories = useSelector(state => state.categories);
  console.log(availableCategories);
  const renderCategory = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridCategories}
        onPress={() =>
          props.navigation.navigate("Over", { id: itemData.item.id })
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
        data={CATEGORIES}
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
