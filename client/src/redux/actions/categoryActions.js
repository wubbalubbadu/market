import axios from 'axios';
import { ActionTypes } from '../constants/actionType';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getCategories = (categories) => async (dispatch) => {
  try {
    const { data } = await API.get('/api/category');
    dispatch({ type: ActionTypes.GET_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};