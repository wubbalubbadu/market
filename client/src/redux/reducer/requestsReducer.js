import {ActionTypes} from '../constants/actionType'

const initialState = {
    requests: []
}
//dispatch action returned object -> goes into this 
const requestsReducer = (state = initialState, { type, payload }) => {
    switch (type) { //determine type 
        case ActionTypes.GET_REQUESTS:
            return {...state, requests: payload}
        case ActionTypes.CREATE_REQUEST:
            return {...state, requests:[ ...state.requests, payload] }  //put payload in redux 
        default:
            return state
    }
};


export default requestsReducer
