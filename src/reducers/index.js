//This file import the REDUCERS and COMBINE
import {combineReducers} from 'redux';
import {productsReducers} from './productsReducers';
import {cartReducers} from './cartReducers';

export default combineReducers({
    products: productsReducers,
    cart: cartReducers,
});