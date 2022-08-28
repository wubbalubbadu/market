import { ActionTypes } from '../constants/actionType';

const initialState = {
  loves: [],
};
// dispatch action returned object -> goes into this
const lovesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_LOVES:
      return { ...state, loves: payload };
    case ActionTypes.ADD_TO_LOVES:
      return { ...state, loves: [...state.loves, payload] };
    default:
      return state;
  }
};

export default lovesReducer;
