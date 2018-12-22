export function arxivReducer(
  state = {
    processing: false,
    data: null,
    error: null,
    search: null,
    prevSearchedValue: ""
  },
  action
) {
  switch (action.type) {
    case "ARXIV_PENDING": {
      return {
        ...state,
        processing: true,
        error: false
      };
    }
    case "ARXIV_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.arxivData,
        search: action.search,
        prevSearchedValue: action.prevSearchedValue,
        error: false
      };
    }
    case "ARXIV_REJECTED": {
      return {
        ...state,
        processing: false,
        error: true
      };
    }
    default:
      return state;
  }
}
