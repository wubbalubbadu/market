import axios from 'axios';
import { createProductFulfilled, createProductPending, createProductRejected, fetchProductsFulfilled, fetchProductsPending, fetchProductsRejected } from '../slice/productsSlice';

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

export const fetchProducts = (filter) => async (dispatch) => {
  dispatch(fetchProductsPending());
  try {
    let response;

    if (filter?.title) {
      response = await axios.get(`http://localhost:5000/api/products?title[regex]=${filter.title}`);
    } else if (filter?.category) {
      response = await axios.get(`http://localhost:5000/api/products?category=${filter.category}`);
    } else {
      response = await axios.get('http://localhost:5000/api/products');
    }
    dispatch(fetchProductsFulfilled(response.data.products));
  } catch (error) {
    dispatch(fetchProductsRejected());
  }
};