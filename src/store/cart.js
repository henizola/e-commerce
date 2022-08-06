import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		putToCart: (cart, action) => {
			const index = cart.findIndex((car) => car.id === action.payload.id);

			if (index === -1) {
				cart.push({ ...action.payload, quantity: 1 });
			} else cart[index].quantity++;
		},
		removeFromCart: (cart, action) => {
			const index = cart.findIndex(
				(element) => element.id === action.payload.id
			);
			cart.splice(index, 1);
		},
		decreaseQuantity: (cart, action) => {
			const index = cart.findIndex((car) => car.id === action.payload);
			cart[index].quantity === 1
				? cart.splice(index, 1)
				: cart[index].quantity--;
		},
		increaseQuantity: (cart, action) => {
			const index = cart.findIndex((car) => car.id === action.payload);
			cart[index].quantity++;
		},
	},
});

export const { putToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
	slice.actions;

export default slice.reducer;

export const getTotalPrice = (cart) => {
	let totalPrice = 15;

	cart.map((prod) => (totalPrice = totalPrice + prod.price * prod.quantity));
	return totalPrice.toLocaleString(undefined, {
		maximumFractionDigits: 2,
	});
};
