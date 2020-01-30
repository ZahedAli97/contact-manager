import { createStore, applyMiddleware } from "redux";
import reducerState from "./Reducer";
import logger from "redux-logger";

const store = createStore(reducerState, applyMiddleware(logger));

export default store;