import {
  aplyMiddleware,
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
