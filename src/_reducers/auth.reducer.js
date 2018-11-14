export function login(
  state = {
    processing: false,
    data: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "LOGIN_REJECTED": {
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
