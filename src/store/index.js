import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";

// TODO 필요한 MiddleWare는 배열 안에 넣으세요.
const composeEnhancers = composeWithDevTools({});
const middlewares = [];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
