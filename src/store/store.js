import {
  aplyMiddleware,
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./../reducers/authReducer";
import projectsReducer from "./../reducers/projectsReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
