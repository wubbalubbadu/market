import axios from 'axios';
import { createRequestFulfilled, createRequestPending, createRequestRejected, fetchRequestsFulfilled, fetchRequestsPending, fetchRequestsRejected } from '../slice/requestsSlice';

// use thunk in redux to separate fetching api from actual UI, similar to middleware
// aka moving the asyc request & logic outside of UI ->
// goal: improve testability and keep UI as thin / representational as possible

// actual api calls live here
// at each stage of the call, depending on the stage/success of api call, we set different actions

export const createRequest = (request) => async (dispatch) => {
  dispatch(createRequestPending());
  try {
    const { data } = await axios.post('http://localhost:5000/api/requests', request);
    dispatch(createRequestFulfilled(data));
  } catch (error) {
    dispatch(createRequestRejected());
  }
};

export const fetchRequests = (filter) => async (dispatch) => {
  dispatch(fetchRequestsPending());
  try {
    let response;

    if (filter?.title) {
      response = await axios.get(`http://localhost:5000/api/requests?title[regex]=${filter.title}`);
    } else if (filter?.category) {
      response = await axios.get(`http://localhost:5000/api/requests?category=${filter.category}`);
    } else {
      response = await axios.get('http://localhost:5000/api/requests');
    }
    dispatch(fetchRequestsFulfilled(response.data.requests));
  } catch (error) {
    dispatch(fetchRequestsRejected());
  }
};