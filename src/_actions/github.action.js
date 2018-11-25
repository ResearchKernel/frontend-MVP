import axios from "axios";

export function fetchGithubSearch(title) {
    return dispatch => {
      axios.get(`https://api.github.com/search/repositories?q=${title}&sort=stars&order=desc`)
        .then(response => {
          if(response.data.total_count !== 0) {
            dispatch({
              type: "GITHUB_FULFILLED",
              githubData: response.data,
            })
          }  
        })
        .catch(error => {
          dispatch({
            type: "GITHUB_REJECTED",
            githubData: error,
        })
      })
    }
  }