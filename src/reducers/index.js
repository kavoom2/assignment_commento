import { combineReducers } from "@reduxjs/toolkit";
import modalStatusReducer from "./modalStatusReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  modalStatusReducer,
  categoriesReducer,
});

export default rootReducer;
