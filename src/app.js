import React from 'react';
import {render} from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';

import { addCart } from './actions/cartActions';
import { postProducts, deleteProducts, updateProducts } from './actions/producstActions';

// Store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import ProductsList from './components/pages/ProductsList';

render(<ProductsList/>, document.getElementById('app'));

// store.subscribe(function () {
//     console.log('current state is: ', store.getState());
// });
// Changed the code above by the redux-logger

// Actions

// --> Products Actions <--
// Post - ADD
store.dispatch(postProducts(
    [{
        id: 1,
        title: 'Camisa',
        description: 'very fresh new one',
        price: 33.33
    },
    {
        id: 2,
        title: 'Boné',
        description: 'used',
        price: 53.33
    }]
));


// Update
store.dispatch(updateProducts(
    {
        id: 2,
        title: ' Relógio Nike'
    }
));

// Delete
store.dispatch(deleteProducts(
    { id: 1 }
));
//

// --> Cart Actions <--
// ADD
store.dispatch(addCart([{ id: 2 }]));

