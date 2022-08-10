import {ActionTypes} from '../constants/actionType'

const initialState = {
    categories: [],
}

//dispatch action returned object -> goes into this 
const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) { //determine type 
        case ActionTypes.GET_CATEGORIES:
            return {...state, categories:payload}
        default:
            return state
    }
};

// after dispatch an action of object
// state = { products: response.data.products } (new data = initial state + payload)

export default categoryReducer