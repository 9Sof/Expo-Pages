import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ onStart, stylesApp }) => {
  return (
    <View style={stylesApp.screen}>
      <Text style={stylesApp.text}>Home</Text>
      <AntDesign.Button
        name="rightcircleo"
        size={24}
        color="white"
        onPress={() => onStart("start")}
      >
        Start
      </AntDesign.Button>
      <Image
        style={stylesApp.image}
        //   source={require("../assets/icon.png")}
        source={{
          uri: "https://ภาพพื้นหลัง.com/wp-content/uploads/2019/03/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-4.jpg",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Home;
