export function subCategory(
  state = {
    processing: false,
    data: {},
    error: false,
    search: null
  },
  action
) {
  switch (action.type) {
    case "SUBCATEGORY_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "SUBCATEGORY_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "SUBCATEGORY_REJECTED": {
      return {
        ...state,
        processing: false,
        data: {},
        error: action.payload
      };
    }
    case "SEARCH_FALSE": {
      return {
        ...state,
        search: action.search
      };
    }
    default:
      return {
        ...state
      };
  }
}
