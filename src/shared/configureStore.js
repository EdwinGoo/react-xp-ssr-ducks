import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ducks from "./store/ducks";

import logger from "redux-logger";
import { apiMiddleware } from "redux-api-middleware";

export default preloadedState =>
  createStore(
    ducks,
    preloadedState,
    applyMiddleware(thunk, apiMiddleware, logger)
  );
