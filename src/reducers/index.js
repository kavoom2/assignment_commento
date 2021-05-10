import { combineReducers } from "@reduxjs/toolkit";
import modalStatusReducer from "./modalStatusReducer";
import filterCheckedReducer from "./filterCheckedReducer";

const rootReducer = combineReducers({
  modalStatusReducer,
  filterCheckedReducer,
});

export default rootReducer;
