import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

const StartScreen = (props) => {
  const renderCategory = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridCategories}
        onPress={() => props.navigation.navigate("Over")}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>StartScreen</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />

      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={CATEGORIES}
          renderItem={renderCategory}
          numColumns={2}
        />
      </View>
    </View>
  );
};

StartScreen.navigationOptions = {
  headerTitle: "Start Screen",
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

export default StartScreen;
