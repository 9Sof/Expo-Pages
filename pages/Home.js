import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ onStart, stylesApp }) => {
  return (
    <View style={stylesApp.screen}>
      <Text>Home</Text>
      <Button title="Start" onPress={onStart} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Home;
