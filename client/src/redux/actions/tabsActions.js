import { ActionTypes } from '../constants/actionType';

export const setTab = (tab) => ({
  type: ActionTypes.SET_TAB, // type is required
  payload: tab,
});
