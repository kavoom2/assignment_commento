import { compose, createStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index.js";

// TODO 필요한 MiddleWare는 배열 안에 넣으세요.
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // Chrome Redux Extension 활성화
const composeEnhancers = devTools || compose;
const middlewares = [];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
