import React from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";

const Start = ({ onOver, stylesApp }) => {
  return (
    <View style={stylesApp.screen}>
      <Text>Start</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <Button title="Over" onPress={onOver} />
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
