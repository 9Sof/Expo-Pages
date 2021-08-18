import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import OverScreen from "../screens/OverScreen";
import StartScreen from "../screens/StartScreen";

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  Over: OverScreen,
  Start: StartScreen,
});

export default createAppContainer(HomeNavigator);
