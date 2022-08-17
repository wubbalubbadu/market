import {ActionTypes} from '../constants/actionType'

const initialState = {
    tab: 0,
    // 0 = sell (products)
    // 1 = request
}

const tabReducer =  (state = initialState, { type, payload }) => {
    switch (type) { //determine type 
        case ActionTypes.SET_TAB:
            return {...state, tab: payload}  //put payload in redux 
        default:
            return state
    }
};

export default tabReducer
