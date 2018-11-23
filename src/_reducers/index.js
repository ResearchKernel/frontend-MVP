import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { catgory } from "./subNavBar.reducer";
import { subCategory } from "./subCategory.reducer";

const rootReducer = combineReducers({
  login, catgory, subCategory
});

export default rootReducer;
