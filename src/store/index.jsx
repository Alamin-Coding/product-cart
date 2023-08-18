import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlices from "./slices/productSlice";

const store = configureStore({
 reducer: {
  cart: cartSlice,
  product: productSlices,
 }
});

export default store;