import axios from 'axios';
import { ActionTypes } from '../constants/actionType';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getLoves = (product) => ({
  type: ActionTypes.GET_LOVES, // type is required
  payload: product,
});

export const addToLoves = (loves) => async (dispatch) => {
  try {
    const { data } = await API
      .put('/user/addToLoves', loves)
      .catch((err) => {
        console.log(err);
      });

    dispatch({ type: ActionTypes.ADD_TO_LOVES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
