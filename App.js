import React from "react";
import { Dimensions, StyleSheet, Platform } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ScreenOrientation from "expo-screen-orientation";
// import { useScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import HomeNavigator from "./navigation/HomeNavigator";
import categoriesReducer from "./store/reducers/categories";
// useScreens();

const rootReducer = combineReducers({
  categories: categoriesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchFonts = () => {
  return Font.loadAsync({
    debrosee: require("./assets/fonts/Debrosee-ALPnL.ttf"),
  });
};

export default function App() {
  const [fontLoading, setFontLoading] = React.useState(false);
  // const [newWindow, setNewWindow] = React.useState({
  //   width: 0,
  //   height: 0,
  // });

  // React.useEffect(() => {
  //   const updateLayout = () => {
  //     setNewWindow({
  //       width: Dimensions.get("window").width,
  //       height: Dimensions.get("window").height,
  //     });
  //   };

  //   Dimensions.addEventListener("change", updateLayout);
  //   // console.log("useEffect : ", newWindow);
  //   return () => {
  //     Dimensions.removeEventListener("change", updateLayout);
  //     // console.log("return useEffect : ", newWindow);
  //   };
  // });

  if (!fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }

  // ScreenOrientation.lockToPortrait(ScreenOrientation.Orientation.PORTRAIT);
  // ScreenOrientation.lockToLandscape(ScreenOrientation.Orientation.LANDSCAPE);
  // กำหนดจอแนวนอน แนวตั้ง

  return (
    <Provider store={store}>
      <HomeNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
