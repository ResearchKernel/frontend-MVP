// import axios from "axios";

// export function fetchCategory(payload) {
//   return dispatch => {
//     axios.get(``) // URL for Category
//       .then(response => {
//         dispatch({
//           type: "CATEGORY_FULFILLED",
//           category: response.data,
//         })
//       }) 
//       .catch(error => {
//         dispatch({
//           type: "CATEGORY_REJECTED",
//           category: error,
//       })
//     })
//   }
// }

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