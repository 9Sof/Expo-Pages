import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Header from "./components/Header";
import Home from "./pages/Home";
import Over from "./pages/Over";
import Start from "./pages/Start";

export default function App() {
  const [screen, setScreen] = React.useState(
    <Home onStart={() => onStart()} stylesApp={styles} />
  );

  const onHome = () => {
    setScreen(<Home onStart={() => onStart()} stylesApp={styles} />);
  };

  const onStart = () => {
    setScreen(<Start onOver={() => onOver()} stylesApp={styles} />);
  };

  const onOver = () => {
    setScreen(<Over onHome={() => onHome()} stylesApp={styles} />);
  };

  return (
    <View style={styles.container}>
      <Header title={"APP"} />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
});
