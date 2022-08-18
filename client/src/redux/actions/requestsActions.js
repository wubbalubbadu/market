import { ActionTypes } from "../constants/actionType"
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    console.log(req.headers.Authorization)
    return req;
  });


export const getRequests = requests => {
    return {
        type: ActionTypes.GET_REQUESTS, // type is required
        payload: requests
    }
};

export const createRequest = (request) => async (dispatch) => {

    try {
        const {data} = await API
        .post('/api/requests', request)
        .catch((err) => {
            console.log(err);
          });

        //console.log(data)
    
        dispatch({ type: ActionTypes.CREATE_REQUEST, payload: data });
      } catch (error) {
        console.log(error);
      }
};



