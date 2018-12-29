import axios from "axios";
var XMLTojs = require("xml2js");

export function fetchArxivData(search, prefix, query, start, maxResults) {
  return dispatch => {
    axios
      .get(
        `https://export.arxiv.org/api/query?search_query=${prefix}:${query}&start=${start}&max_results=${maxResults}&sortBy=lastUpdatedDate`
      )
      .then(response => {
        var data = [];
        var parseString = XMLTojs.parseString;
        parseString(response.data, (error, result) => {
          data = result.feed.entry;
        });
        dispatch({
          type: "ARXIV_FULFILLED",
          arxivData: data,
          search,
          prevSearchedValue: search ? query : ""
        });
      })
      .catch(error => {
        dispatch({
          type: "AXIV_REJECTED",
          arxivData: error,
          search,
          prevSearchedValue: search ? query : ""
        });
      });
  };
}
