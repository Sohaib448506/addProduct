import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { values: {} };
export const productSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    display: (state, payload) => {
      console.log(payload);
    },
    ProductData: (state, payload) => {
      state.values = payload.payload.name;
    },
  },
});

const store = configureStore({
  reducer: productSlice.reducer,
});

export const submitAction = productSlice.actions;

export default store;
