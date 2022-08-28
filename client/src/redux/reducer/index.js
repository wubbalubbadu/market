import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import tabReducer from './tabReducer';
import lovesReducer from './lovesReducer';

export const reducers = combineReducers({
  authReducer, productsReducer, categoryReducer, tabReducer, lovesReducer,
});