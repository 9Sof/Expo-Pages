import React from "react";
import { Dimensions, StyleSheet, Platform } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ScreenOrientation from "expo-screen-orientation";
// import { useScreens } from "react-native-screens";

import Header from "./components/HeaderButton";
import HomeScreen from "./screens/HomeScreen";
import OverScreen from "./screens/OverScreen";
import StartScreen from "./screens/StartScreen";

import HomeNavigator from "./navigation/HomeNavigator";

// useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    debrosee: require("./assets/fonts/Debrosee-ALPnL.ttf"),
  });
};

export default function App() {
  const [screenList, setScreenList] = React.useState("");
  const [fontLoading, setFontLoading] = React.useState(false);
  const [newWindow, setNewWindow] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const updateLayout = () => {
      setNewWindow({
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      });
    };

    Dimensions.addEventListener("change", updateLayout);
    // console.log("useEffect : ", newWindow);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
      // console.log("return useEffect : ", newWindow);
    };
  });

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
    home: (
      <HomeScreen onStart={(page) => setScreenList(page)} stylesApp={styles} />
    ),
    start: (
      <StartScreen onOver={(page) => setScreenList(page)} stylesApp={styles} />
    ),
    over: (
      <OverScreen onHome={(page) => setScreenList(page)} stylesApp={styles} />
    ),
  };

  let screen = Pages[screenList || "home"];

  // ScreenOrientation.lockToPortrait(ScreenOrientation.Orientation.PORTRAIT);
  // ScreenOrientation.lockToLandscape(ScreenOrientation.Orientation.LANDSCAPE);
  // กำหนดจอแนวนอน แนวตั้ง

  return <HomeNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "white" : "red",
    // backgroundColor: Platform.select({
    //   android: "white",
    //   ios: "red",
    // }),
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
