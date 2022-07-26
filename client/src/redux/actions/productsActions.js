import { ActionTypes } from "../constants/actionType"

export const setProducts = product => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product
    }
};

