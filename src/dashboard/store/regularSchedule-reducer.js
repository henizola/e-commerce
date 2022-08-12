import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "regularSchedule",
	initialState: [],
	reducers: {
		regularScheduleAdded: (regularSchedule, action) => {
			return [...action.payload];
		},
	},
});

export const { regularScheduleAdded } = slice.actions;

export default slice.reducer;
