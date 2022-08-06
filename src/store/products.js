import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Utils/datas.util";

const slice = createSlice({
  name: products,
  initialState: products,
  reducers: {
    addProducts: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProducts } = slice.actions;

export default slice.reducer;
