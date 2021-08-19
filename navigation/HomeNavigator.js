import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

import Colors from "../constants/colors";
import FavoriteScreen from "../screens/FavoriteScreen";
import HomeScreen from "../screens/HomeScreen";
import OverScreen from "../screens/OverScreen";
import StartScreen from "../screens/StartScreen";

const defaultStackNacOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
  },
};
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: { backgroundColor: Colors.primaryColor },
      },
    },
    Over: OverScreen,
    Start: {
      screen: StartScreen,
      navigationOptions: {
        headerStyle: { backgroundColor: Colors.primaryColor },
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackNacOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        title: "My Favorites",
        headerStyle: { backgroundColor: Colors.accentColor },
      },
    },
    Over: OverScreen,
  },
  {
    defaultNavigationOptions: defaultStackNacOptions,
  }
);

const tabScreenConfig = {
  Homes: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-heart" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.accentColor,
    },
  },
};

const HomeTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });
export default createAppContainer(HomeTabNavigator);
