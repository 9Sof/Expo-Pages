export const getCategory = (id) => {
    return {
        type: "GET_CATEGORY",
        categoryId: id
    }
}
