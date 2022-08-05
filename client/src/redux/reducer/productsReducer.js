import {ActionTypes} from '../constants/actionType'

const initialState = {
    products: [],
}

//dispatch action returned object -> goes into this 
const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) { //determine type 
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload}
        case ActionTypes.CREATE_PRODUCT:
            return { ...state, products: payload }  //put payload in redux 
        default:
            return state
    }
};

// after dispatch an action of object
// state = { products: response.data.produects } (new data = initial state + payload)

export default productsReducer