import axios from 'axios';
import { createProductFulfilled, createProductPending, createProductRejected, fetchProductsFulfilled, fetchProductsPending, fetchProductsRejected, updateProductFilter } from '../slice/productsSlice';

// use thunk in redux to separate fetching api from actual UI, similar to middleware
// aka moving the asyc request & logic outside of UI ->
// goal: improve testability and keep UI as thin / representational as possible

// actual api calls live here
// at each stage of the call, depending on the stage/success of api call, we set different actions

export const createProduct = (product) => async (dispatch) => {
  dispatch(createProductPending());
  try {
    const { data } = await axios.post('http://localhost:5000/api/products', product);
    dispatch(createProductFulfilled(data));
  } catch (error) {
    dispatch(createProductRejected());
  }
};

export const fetchProducts = (filter) => async (dispatch, getState) => {
  dispatch(updateProductFilter(filter));
  const state = getState();
  const newFilter = state.productsReducer.filter;

  const filterparams = {};
  for (const key in newFilter) {
    if (newFilter[key] !== null && newFilter[key] !== '') {
      filterparams[key] = newFilter[key];
    }
  }

  // console.log('filterparams', filterparams);

  dispatch(fetchProductsPending());
  try {
    const response = await axios.get('http://localhost:5000/api/products', {
      params: {
        ...filterparams,
      },
    });
    // dispatch(fetchProductsFulfilled(response.data.products));
    dispatch(fetchProductsFulfilled({ products: response.data.products, numAll: response.data.numAll }));
  } catch (error) {
    dispatch(fetchProductsRejected());
  }
};