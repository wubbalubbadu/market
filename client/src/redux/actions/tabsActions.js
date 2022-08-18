import { ActionTypes } from "../constants/actionType"

export const setTab = tab => {
    return {
        type: ActionTypes.SET_TAB, // type is required
        payload: tab
    }
};
