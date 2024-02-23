import { configureStore } from "@reduxjs/toolkit";
import site from "./site";

export default configureStore({
  reducer: {
      site
  }
});