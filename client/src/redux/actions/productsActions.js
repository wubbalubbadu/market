import axios from 'axios';
import { ActionTypes } from '../constants/actionType';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  console.log(req.headers.Authorization);
  return req;
});

export const setProducts = (product) => ({
  type: ActionTypes.SET_PRODUCTS, // type is required
  payload: product,
});

export const createProduct = (product) => async (dispatch) => {
  console.log(product);
  try {
    const { data } = await API
      .post('/api/products', product)
      .catch((err) => {
        console.log(err);
      });

    // console.log(data)

    dispatch({ type: ActionTypes.CREATE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// returns a product object
