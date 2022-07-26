import {ActionTypes} from '../constants/actionType'

const initialState = {
    products: []
}

const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload}
        default:
            return state
    }
}


export default productsReducer