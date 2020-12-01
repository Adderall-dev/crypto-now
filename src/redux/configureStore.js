import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import coin from "./ducks/coin";

const middleware = [Thunk];

const reducer = combineReducers({
  coin,
});

const configureStore = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default configureStore;
