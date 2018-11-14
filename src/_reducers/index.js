import { combineReducers } from "redux";
import { login } from "./auth.reducer";

const rootReducer = combineReducers({
  login
});

export default rootReducer;
