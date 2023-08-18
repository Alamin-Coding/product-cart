import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import statusCode from "../../utils/statusCode";


// First, create the thunk
export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const {data} = await axios.get('https://fakestoreapi.com/products');
  return data
});

const initialState = {
  data: [],
  status: statusCode.SUCCESS
};

const productSlices = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchProducts(state,action) {
    //  state.data = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state) => {
      state.status = statusCode.LOADING;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = statusCode.SUCCESS;
    })
    .addCase(getProducts.rejected, (state) => {
      state.status = statusCode.ERROR;
    })
  },
});

// export const { fetchProducts } = productSlices.actions;
export default productSlices.reducer;