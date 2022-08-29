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
    const response = await axios.get('http://localhost:5000/api/products', { params: {
      ...filter,
    } });
    dispatch(fetchProductsFulfilled({ products: response.data.products, totalCount: response.data.totalCount }));
  } catch (error) {
    dispatch(fetchProductsRejected());
  }
};