import { createStore, applyMiddleware } from "redux";
import ducks from "./ducks";

export default preloadedState =>
  createStore(
    ducks,
    preloadedState,
    applyMiddleware(thunk, apiMiddleware, logger)
  );
