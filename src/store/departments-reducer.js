import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "departments",
	initialState: [],
	reducers: {
		departmentsAdded: (departments, action) => {
			return [...action.payload];
		},
	},
});

export const { departmentsAdded } = slice.actions;

export default slice.reducer;
