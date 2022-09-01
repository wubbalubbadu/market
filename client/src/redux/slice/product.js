import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPages: 0,
  filter: {
    offset: 1,
    limit: 10,
  },
  loading: false,
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    createProductPending(state) {
      state.loading = true;
    },
    createProductFulfilled(state, action) {
      state.loading = false;
      state.products = [...state.products, action.payload];
    },
    createProductRejected(state) {
      state.loading = false;
    },
    fetchProductsPending(state) {
      state.loading = true;
    },
    fetchProductsFulfilled(state, action) {
      state.loading = false;
      state.products = action.payload.products;
      state.totalPages = action.payload.totalCount ? Math.ceil(action.payload.totalCount / 10) : 1;
    },
    fetchProductsRejected(state) {
      state.loading = false;
    },
  },
});

export const {
  setProducts,
  createProductFulfilled,
  createProductPending,
  createProductRejected,
  fetchProductsPending,
  fetchProductsFulfilled,
  fetchProductsRejected,
} = slice.actions;
export default slice.reducer;
