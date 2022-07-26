import { ActionTypes } from "../constants/actionType"

export const addToLoves = product => {
    return {
        type: ActionType.ADD_TO_LOVES,
        payload: product
    }
};
