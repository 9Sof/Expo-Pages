import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
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

const navDrawer = (navData) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="menu"
      iconName="ios-menu"
      onPress={() => {
        navData.navigation.toggleDrawer();
      }}
    />
  </HeaderButtons>
);

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: (navData) => ({
        headerLeft: () => navDrawer(navData),
        headerStyle: { backgroundColor: Colors.primaryColor },
      }),
    },
    Over: OverScreen,
  },
  {
    defaultNavigationOptions: defaultStackNacOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: (navData) => ({
        title: "My Favorites",
        headerLeft: () => navDrawer(navData),
        headerStyle: { backgroundColor: Colors.accentColor },
      }),
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

const HomeFavTabNavigator =
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
const StartNavigator = createStackNavigator({
  Start: {
    screen: StartScreen,
    navigationOptions: (navData) => ({
      headerTitle: "Start",
      headerLeft: () => navDrawer(navData),
      headerStyle: { backgroundColor: Colors.primaryColor },
    }),
  },
});

const MainNavigator = createDrawerNavigator(
  {
    HomeFavs: {
      screen: HomeFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Home",
      },
    },
    Start: StartNavigator,
  },
  {
    contentOptions: {
      activeTintColor: "orange",
    },
  }
);

export default createAppContainer(MainNavigator);
