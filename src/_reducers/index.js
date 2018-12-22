import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { subCategory } from "./subCategory.reducer";
import { githubReducer } from "./github.reducer";

import { arxivReducer } from "./arxiv.reducer";

const rootReducer = combineReducers({
  login,
  subCategory,
  githubReducer,
  arxivReducer
});

export default rootReducer;
