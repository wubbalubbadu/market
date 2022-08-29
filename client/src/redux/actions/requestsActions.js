import axios from 'axios';
import { ActionTypes } from '../constants/actionType';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getRequests = (request) => ({
  type: ActionTypes.GET_REQUESTS, // type is required
  payload: request,
});

export const createRequest = (request) => async (dispatch) => {
  try {
    const { data } = await API
      .post('/api/requests', request)
      .catch((err) => {
        console.log(err);
      });

    // console.log(data)

    dispatch({ type: ActionTypes.CREATE_REQUEST, payload: data });
  } catch (error) {
    console.log(error);
  }
};