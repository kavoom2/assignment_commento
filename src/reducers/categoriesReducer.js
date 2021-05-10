import initialState from "./initialState";
import { ACTIONS } from "../actions/index";

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CATEGORIES: {
      return Object.assign({}, state, {
        categories: action.payload,
      });
    }
    default:
      return state;
  }
};

export default categoriesReducer;
