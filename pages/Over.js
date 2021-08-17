import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Over = ({ onHome, stylesApp }) => {
  return (
    <View style={stylesApp.screen}>
      <Text style={stylesApp.text}>Over</Text>
      <AntDesign.Button
        name="rightcircleo"
        size={24}
        color="white"
        onPress={() => onHome("home")}
      >
        Over
      </AntDesign.Button>
    </View>
  );
};

export default Over;
