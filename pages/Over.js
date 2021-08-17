import React from "react";
import { View, Button, Text } from "react-native";

const Over = ({ onHome, stylesApp }) => {
  return (
    <View style={stylesApp.screen}>
      <Text>Over</Text>
      <Button title="Home" onPress={onHome} />
    </View>
  );
};

export default Over;
