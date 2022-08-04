import { ActionTypes } from "../constants/actionType"

export const setProducts = product => {
    return {
        type: ActionTypes.SET_PRODUCTS, // type is required
        payload: product
    }
};

//returns a product object
