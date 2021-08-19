import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/colors";

const Header = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
    />
  );
};


export default Header;
