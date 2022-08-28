import categoryReducer from './categoryReducer';
import tabReducer from './tabReducer';
import lovesReducer from './lovesReducer';

export const reducers = combineReducers({
  authReducer, productsReducer, categoryReducer, tabReducer, lovesReducer,
});
