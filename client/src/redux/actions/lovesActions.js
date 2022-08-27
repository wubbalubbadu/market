import axios from 'axios';
import { ActionTypes } from '../constants/actionType';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const getLoves = (product) => ({
  type: ActionTypes.GET_LOVES, // type is required
  payload: product,
});

export const addToLoves = (product) => async (dispatch) => {
  console.log(product);
  try {
    const { data } = await API
      .post('/user/addCart', product)
      .catch((err) => {
        console.log(err);
      });

    dispatch({ type: ActionTypes.ADD_TO_LOVES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
