import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "cart",
	initialState: [
		{
			name: "Iphone X",
			price: 17000,
			discount: true,
			catagorie: "elec",
			type: "phone",
			description: "lorem ipsum dir amet lorem  ",
			stock: 3,
			bestSelling: false,
			image:
				"https://i.pinimg.com/564x/12/ea/b4/12eab45cd5f6545052fa90422ac3df57.jpg",
			quantity: 1,
			id: 113344,
		},
	],
	reducers: {
		putToCart: (cart, action) => {
			const index = cart.findIndex((car) => car.id === action.payload.id);

			if (index === -1) {
				cart.push(action.payload);
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
