export function githubReducer(
    state = {
      processing: false,
      data: [],
      error: null
    },
    action
  ) {
    switch (action.type) {
      case "GITHUB_FULFILLED": {
        return {
          ...state,
          processing: false,
          data: action.githubData,
          error: false
        };
      }
      case "GITHUB_PENDING": {
        return {
          ...state,
          processing: true,
          error: false
        };
      }
      case "GITHUB_REJECTED": {
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
