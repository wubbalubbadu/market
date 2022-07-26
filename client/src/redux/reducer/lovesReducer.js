import {ActionTypes} from '../constants/actionType'

const initialState = {
    loves: []
}

const lovesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
            case ActionTypes.ADD_TO_CART:
                const product = payload;
                const existItem = state.loves.find((x) => x.id === product.id);

                if (existItem) {
                    return { ...state, 
                        loves: state.loves.map((x) =>
                        x.id === existItem.id ? product : x
                      ),}
                } else {
                    return {
                        ...state,
                        loves: [...state.loves, product],
                    };
                }
        // case DELETE_FROM_CART:
        //     return {
        //         ...state,
        //         loves: state.loves.filter((x) => x.product !== action.payload),
        //       };

        default:
            return state
    }
}


export default lovesReducer