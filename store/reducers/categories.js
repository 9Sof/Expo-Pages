import { CATEGORIES } from "../../data/dummy-data";

const initialState = {
  categories: CATEGORIES,
  favorites: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      console.log(state.favorites);
      console.log(action.categoryId);
      if (state.favorites.length === 0) {
        const favorite = state.categories.find(
          (category) => category.id === action.categoryId
        );
        return {
          ...state,
          favorites: state.favorites.concat(favorite),
        };
      }
      if (state.favorites.some((fav) => fav.id !== action.categoryId)) {
        const favorite = state.categories.find(
          (category) => category.id === action.categoryId
        );

        return {
          ...state,
          favorites: state.favorites.concat(favorite),
        };
      }
    default:
      return state;
  }
};

export default categoriesReducer;
