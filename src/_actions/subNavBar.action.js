export function fetchSubCategory(payload) {
  return dispatch => {
    return dispatch({
      type: "SUBCATEGORY",
      payload: Promise.resolve({
        subCategory: payload
      })
    })
      .then(() => {
        return dispatch({
          type: "SEARCH_FALSE",
          search: false
        });
      })
      .catch(error => {
        console.error(error);
        return;
      });
  };
}
