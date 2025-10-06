import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose
} from "redux";
import { CartReducer } from "./CartPage/reducer.js";
import thunk from "redux-thunk";
import { wishlistReducer } from "./wishlist/wishlist.reducer.js";
import { orderReducer } from "./order/order.reducer.js";

const rootReducer = combineReducers({
  CartReducer,
  wishlistManager: wishlistReducer,
  orderManager: orderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
