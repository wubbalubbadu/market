import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPages: 0,
  filter: {
    title: '',
    category: '',
    offset: 0,
    limit: 10,
  },
  loading: false,
  dialogMessage: '',
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateFilter(state, action) {
      for (const key in action.payload) {
        state.filter[key] = action.payload[key];
      }
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
    fetchProductsRejected(state, action) {
      state.loading = false;
      state.dialogMessage = action.payload;
    },
  },
});

export const {
  updateFilter,
  createProductFulfilled,
  createProductPending,
  createProductRejected,
  fetchProductsPending,
  fetchProductsFulfilled,
  fetchProductsRejected,
} = slice.actions;
export default slice.reducer;
