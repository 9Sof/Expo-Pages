import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = (props) => {

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HomeScreen</Text>
      <AntDesign.Button
        name="rightcircleo"
        size={24}
        color="white"
        onPress={() => props.navigation.navigate("Start")}
      >
        StartScreen
      </AntDesign.Button>
      <Image
        style={styles.image}
        //   source={require("../assets/icon.png")}
        source={{
          uri: "https://ภาพพื้นหลัง.com/wp-content/uploads/2019/03/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-4.jpg",
        }}
      />
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
  image: {
    width: Dimensions.get("window").width > 1000 ? 500 : "100%",
    height: Dimensions.get("window").height > 1000 ? "100%" : 200,
    margin: 20,
  },
  image: {
    width: Dimensions.get("window").width > 1000 ? 500 : "100%",
    height: Dimensions.get("window").height > 1000 ? "100%" : 200,
    margin: 20,
  },
});

export default HomeScreen;
