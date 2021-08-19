import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import FavoriteScreen from "../screens/FavoriteScreen";
import HomeScreen from "../screens/HomeScreen";
import OverScreen from "../screens/OverScreen";
import StartScreen from "../screens/StartScreen";

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Over: OverScreen,
    Start: StartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
    },
  }
);

const HomeTabNavigator = createBottomTabNavigator(
  {
    Homes: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        ),
      },
    },
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-heart" size={25} color={tabInfo.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);
export default createAppContainer(HomeTabNavigator);
