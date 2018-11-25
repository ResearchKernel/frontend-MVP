export function cardReducer(
    state = {
      processing: false,
      data: null,
      error: null
    },
    action
  ) {
    switch (action.type) {
      case "CARD_PENDING": {
        return {
          ...state,
          processing: true,
          error: false
        };
      }
      case "CARD_FULFILLED": {
        return {
          ...state,
          processing: false,
          data: action.cardData,
          error: false
        };
      }
      case "CARD_REJECTED": {
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
  