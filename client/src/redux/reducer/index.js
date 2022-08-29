import { combineReducers } from 'redux';

import authReducer from './authReducer';
import product from '../slice/product';
import categoryReducer from './categoryReducer';
import tabReducer from './tabReducer';
import lovesReducer from './lovesReducer';
import requestsReducer from './requestsReducer';

export const reducers = combineReducers({
  authReducer, product, categoryReducer, tabReducer, lovesReducer, requestsReducer,
});