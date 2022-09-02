import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productsReducer from '../slice/productsSlice';
import categoryReducer from './categoryReducer';
import tabReducer from './tabReducer';
import lovesReducer from './lovesReducer';
import requestsReducer from '../slice/requestsSlice';

export const reducers = combineReducers({
  authReducer, productsReducer, categoryReducer, tabReducer, lovesReducer, requestsReducer,
});