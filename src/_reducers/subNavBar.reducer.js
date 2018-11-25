export function catgory(
    state = {
      processing: false,
      data: {},
      error: false
    },
    action
  ) {
    switch (action.type) {
      case "CATEGORY_PENDING": {
        return {
          ...state,
          processing: true
        };
      }
      case "CATEGORY_FULFILLED": {
        return {
          ...state,
          processing: false,
          data: action.payload
        };
      }
      case "CATEGORY_REJECTED": {
        return {
          ...state,
          processing: false,
          data: {},
          error: action.payload
        };
      }
      default:
        return {
          ...state
        };
    }
  }