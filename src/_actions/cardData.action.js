import axios from "axios";

export function fetchCardData(subCategory, limit, offset) {
  return dispatch => {
    axios.get(`http://localhost:3000/v1/${subCategory}/sorted?limit=${limit}&offset=${offset}`)
      .then(response => {
        dispatch({
          type: "CARD_FULFILLED",
          cardData: response.data.result,
        })
      }) 
      .catch(error => {
        dispatch({
          type: "CARD_REJECTED",
          cardData: error,
      })
    })
  }
}