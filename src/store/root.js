import site from "./site";
import order from "./order";
import trainSettings from "./trainSettings";
import { combineReducers } from "redux";

const root = combineReducers({
  site,
  order,
  trainSettings,
});

export default root;