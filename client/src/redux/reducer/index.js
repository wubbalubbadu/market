import { combineReducers } from 'redux';


import authReducer from './authReducer';
import productsReducer from './productsReducer';
import lovesReducer from './lovesReducer';

export const reducers = combineReducers({ authReducer, productsReducer, lovesReducer});