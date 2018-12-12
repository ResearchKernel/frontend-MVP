export function arxivReducer(
    state = {
      processing: false,
      data: null,
      error: null
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
  