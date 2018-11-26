import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { catgory } from "./subNavBar.reducer";
import { subCategory } from "./subCategory.reducer";
import { cardReducer } from "./cardData.reducer";
import { arxivReducer } from "./arxiv.reducer";

const rootReducer = combineReducers({
  login, catgory, subCategory, cardReducer, arxivReducer
});

export default rootReducer;
