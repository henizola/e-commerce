import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "user",
	initialState: [],
	reducers: {
		userSignedIn: (user, action) => {
			return [action.payload];
		},
		userSignedOut: (user, action) => {
			return [];
		},
		updateUser: (user, action) => {
			return action.payload;
		},
	},
});

export const { userSignedIn, userSignedOut, updateUser } = slice.actions;

export default slice.reducer;
