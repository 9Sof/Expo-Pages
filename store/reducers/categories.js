import { CATEGORIES } from "../../data/dummy-data";

const initialState = {
  categories: CATEGORIES,
  favorites: [],
};

const categoriesReducer = (state = initialState, action) => {
  return state;
};

export default categoriesReducer;
