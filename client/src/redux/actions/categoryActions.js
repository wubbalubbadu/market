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

export const getCategories = (categories) =>  async (dispatch)=> {
    try {
        const {data} = await API.get('/api/categories')
        dispatch({type: ActionTypes.GET_CATEGORIES, payload: data})
    } catch (error) {
        console.log(error)
    }
};

