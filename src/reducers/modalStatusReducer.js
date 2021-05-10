import { ACTIONS } from "../actions";
import initialState from "./initialState";

const modalStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_MODALSTATUS: {
      return Object.assign({}, state, {
        modalStatus: action.payload,
      });
    }
    default:
      return state;
  }
};

export default modalStatusReducer;
