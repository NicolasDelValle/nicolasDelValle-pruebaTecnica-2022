import { combineReducers } from "redux";
import characters from "./characterReducer";
import page from "./pageReducer";
import fav from "./favReducer";

const rootReducer = combineReducers({
  characters,
  page,
  fav,
});

export default rootReducer;
