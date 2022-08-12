import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productReducer from "./products";
import cartReducer from "./cart";
import userReducer from "./user-reducer";

const reducer = combineReducers({
	cart: cartReducer,
	products: productReducer,
	user: userReducer,
});

export const customConfigureStore = () => {
	return configureStore({
		reducer,
	});
};
