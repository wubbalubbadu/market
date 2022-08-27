import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import tabReducer from './tabReducer';

export const reducers = combineReducers({
  authReducer, productsReducer, categoryReducer, tabReducer,
});
