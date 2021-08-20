import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
const FavoriteScreen = (props) => {
  const favorites = useSelector((state) => state.categories.favorites);

  return (
    <View style={styles.screen}>
      <Text>Favorite Screen</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={favorites}
        renderItem={(itemData) => {
          return <Text style={styles.text}>{itemData.item.title}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default FavoriteScreen;
