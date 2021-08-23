export const getCategory = (id) => {
  return {
    type: "GET_CATEGORY",
    categoryId: id,
  };
};

export const deleteFAV = (id) => {
  return {
    type: "DELETE_FAV",
    categoryId: id,
  };
};
