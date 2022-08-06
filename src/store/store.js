import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productReducer from "./products";
import cartReducer from "./cart";

const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export const customConfigureStore = () => {
  return configureStore({
    reducer,
  });
};
