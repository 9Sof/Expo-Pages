import React from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import Home from "./pages/Home";
import Over from "./pages/Over";
import Start from "./pages/Start";

const fetchFonts = () => {
  return Font.loadAsync({
    debrosee: require("./assets/fonts/Debrosee-ALPnL.ttf"),
  });
};

export default function App() {
  const [screenList, setScreenList] = React.useState("");
  const [fontLoading, setFontLoading] = React.useState(false);

  if (!fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  const Pages = {
    home: <Home onStart={(page) => setScreenList(page)} stylesApp={styles} />,
    start: <Start onOver={(page) => setScreenList(page)} stylesApp={styles} />,
    over: <Over onHome={(page) => setScreenList(page)} stylesApp={styles} />,
  };

  let screen = Pages[screenList || "home"];

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
  },
  text:{
    padding: 10,
    fontSize: 30,
    fontFamily: "debrosee",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
});
