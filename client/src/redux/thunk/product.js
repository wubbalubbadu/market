import axios from 'axios';
import { createProductFulfilled, createProductPending, createProductRejected, fetchProductsFulfilled, fetchProductsPending, fetchProductsRejected, setProducts } from '../slice/product';

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