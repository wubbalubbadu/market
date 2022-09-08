// createSlice accepts  initial state + an object full of reducer functions and a slice name.
// automatically generates action creators and action types
// that correspond to the reducers and state
// so we don't need that many files! reducers & actions in a bundle!

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  filter: {
    'title[regex]': null,
    category: null,
    sort: null,
    page: 1,
  },
  dialogMessage: '',
  totalPages: 0,
};

// for every async func in redux/thunk
// define 3 stages: 'pending', 'fulfilled', 'rejected' to indicate stage of api / func
// useful for ui loading (the circular progress thing)
// & / error dialog (when server / func fails & we need to show users message)

const slice = createSlice({
  name: 'productslice',
  initialState,
  reducers: {
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
      state.products = action.payload;
      state.totalPages = action.payload.numAll ? Math.ceil(action.payload.numAll / 9) : 1;
    },
    fetchProductsRejected(state, action) {
      state.loading = false;
      state.dialogMessage = action.payload;
    },
    updateProductFilter(state, action) {
      // console.log(action.payload);
      for (const key in action.payload) {
        state.filter[key] = action.payload[key];
      }
    },
  },
});

export const {
  createProductFulfilled,
  createProductPending,
  createProductRejected,
  fetchProductsPending,
  fetchProductsFulfilled,
  fetchProductsRejected,
  updateProductFilter,
} = slice.actions;
// slice turns all the functions you defined in reducers into action!

export default slice.reducer;
