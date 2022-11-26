import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProductw: (state, action) => {
      state.products.push(action.payload);
    },
    emptyWishlist: (state) => {
      state.products = [];
    },
  },
});

export const { addProductw, setProducts, emptyWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
