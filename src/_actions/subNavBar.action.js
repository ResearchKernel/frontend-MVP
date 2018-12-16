export function fetchSubCategory(payload) {
  return dispatch => {
    return dispatch({
      type: "SUBCATEGORY",
      payload: Promise.resolve({
        subCategory: payload
      })
    })
      .catch(error => {
        console.error(error);
        return;
      });
  };
}