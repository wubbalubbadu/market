// createSlice accepts  initial state + an object full of reducer functions and a slice name.
// automatically generates action creators and action types
// that correspond to the reducers and state
// so we don't need that many files! reducers & actions in a bundle!

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
  loading: false,
  filter: {
    'title[regex]': null,
    category: null,
    sort: null,
    page: 1,
  },
  dialogMessage: '',
  totalPage: 0,
};

// for every async func in redux/thunk
// define 3 stages: 'pending', 'fulfilled', 'rejected' to indicate stage of api / func
// useful for ui loading (the circular progress thing)
// & / error dialog (when server / func fails & we need to show users message)
const slice = createSlice({
  name: 'requestsslice',
  initialState,
  reducers: {
    createRequestPending(state) {
      state.loading = true;
    },
    createRequestFulfilled(state, action) {
      state.loading = false;
      state.requests = [...state.requests, action.payload];
    },
    createRequestRejected(state) {
      state.loading = false;
    },
    fetchRequestsPending(state) {
      state.loading = true;
    },
    fetchRequestsFulfilled(state, action) {
      state.loading = false;
      state.requests = action.payload.requests;
      state.totalPage = action.payload.numAll ? Math.ceil(action.payload.numAll / 10) : 1;
    },
    fetchRequestsRejected(state) {
      state.loading = false;
    },
    updateRequestFilter(state, action) {
      // console.log(action.payload);
      for (const key in action.payload) {
        state.filter[key] = action.payload[key];
      }
    },
  },
});

export const {
  createRequestPending,
  createRequestFulfilled,
  createRequestRejected,
  fetchRequestsPending,
  fetchRequestsFulfilled,
  fetchRequestsRejected,
  updateRequestFilter,
} = slice.actions;
// slice turns all the functions you defined in reducers into action!

export default slice.reducer;
