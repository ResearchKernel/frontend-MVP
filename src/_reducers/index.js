import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { catgory } from "./subNavBar.reducer";
import { subCategory } from "./subCategory.reducer";
import { githubReducer } from "./github.reducer";

import { arxivReducer } from "./arxiv.reducer";

const rootReducer = combineReducers({
  login, catgory, subCategory, githubReducer, arxivReducer
});

export default rootReducer;
