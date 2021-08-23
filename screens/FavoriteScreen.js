import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { deleteFAV } from "../store/actions/categories";

// const initialState = {
//   id: 0,
// };

const FavoriteScreen = (props) => {
  const favorites = useSelector((state) => state.categories.favorites);
  // const [categoriesState, dispatchCategories] = React.useReducer(
  //   formReducer,
  //   initialState
  // );

  // const formReducer = (state, action) => {
  //   if (action.type === "DELETE_FAV") {
  //   }
  // };

  const dispatch = useDispatch();
  const deletedFav = (id) => {
    // dispatchCategories({ type: "DELETE_FAV", payload: id });
      dispatch(deleteFAV(id));
  };

  return (
    <View style={styles.screen}>
      <Text>Favorite Screen</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={favorites}
        renderItem={(itemData) => {
          return (
            <TouchableOpacity onPress={() => deletedFav(itemData.item.id)}>
              <Text style={styles.text}>{itemData.item.title}</Text>
            </TouchableOpacity>
          );
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
