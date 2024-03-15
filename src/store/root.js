import site from "./site";
import order from "./order";
import { combineReducers } from "redux";

const root = combineReducers({
  site,
  order,
});

export default root;