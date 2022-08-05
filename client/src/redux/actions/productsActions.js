import { ActionTypes } from "../constants/actionType"

export const setProducts = product => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: product
    }
};

export const createProduct = product => {
    try {
        const res = await axios.post('http://localhost:5000/api/products', {product: product})
    
        dispatch({ type: CREATE, payload: data });
      } catch (error) {
        console.log(error);
      }
};


