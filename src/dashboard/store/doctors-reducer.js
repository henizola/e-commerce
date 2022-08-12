import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "doctors",
	initialState: [],
	reducers: {
		doctorsAdded: (doctors, action) => {
			return [...action.payload];
		},
	},
});

export const { doctorsAdded } = slice.actions;

export default slice.reducer;
