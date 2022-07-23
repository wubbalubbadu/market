import { combineReducers } from 'redux';


import auth from './authReducer';
import {productsReducer} from './productsReducer';

export const reducers = combineReducers({ auth, allProducts: productsReducer});