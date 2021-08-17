import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Start = ({ onOver, stylesApp }) => {
  return (
    <View style={stylesApp.screen}>
      <Text style={stylesApp.text}>Start</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <AntDesign.Button
        name="rightcircleo"
        size={24}
        color="white"
        onPress={() => onOver("over")}
      >
        Over
      </AntDesign.Button>
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
});

export default Start;
