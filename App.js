import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ScreenOrientation from "expo-screen-orientation";

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
    home: <Home onStart={(page) => setScreenList(page)} stylesApp={styles} />,
    start: <Start onOver={(page) => setScreenList(page)} stylesApp={styles} />,
    over: <Over onHome={(page) => setScreenList(page)} stylesApp={styles} />,
  };

  let screen = Pages[screenList || "home"];

  // ScreenOrientation.lockToPortrait(ScreenOrientation.Orientation.PORTRAIT);
  // ScreenOrientation.lockToLandscape(ScreenOrientation.Orientation.LANDSCAPE);
  // กำหนดจอแนวนอน แนวตั้ง

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header title={"APP"} />
        {screen}
        <View
          style={{
            flex: 1,
            flexDirection: newWindow.width > 800 ? "row" : "column",
          }}
        >
          <Text>1</Text>
          <Text>1</Text>
          <Text>1</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "white" : "red",
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
