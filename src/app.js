import { createStore } from 'redux';

import reducers from './reducers/index';

// Store
const store = createStore(reducers);

store.subscribe(function () {
    console.log('current state is: ', store.getState());
});

// Actions

// --> Products Actions <--
// Post - ADD
store.dispatch({
    type: "POST_PRODUCT",
    payload: [{
        id: 1,
        title: 'Camiseta',
        description: 'very fresh new one',
        price: 33.33
    },
    {
        id: 2,
        title: 'Calça',
        description: 'used',
        price: 53.33
    },
    ]
});


store.dispatch({
    type: "POST_PRODUCT",
    payload: [{
        id: 3,
        title: 'Camisa',
        description: 'very fresh new one',
        price: 33.33
    },
    {
        id: 4,
        title: 'Boné',
        description: 'used',
        price: 53.33
    },
    ]
});

// Update
store.dispatch({
    type: "UPDATE_PRODUCT",
    payload: {
        id: 2,
        title: 'New Title MTF'
    },
});

// Delete
store.dispatch({
    type: "DELETE_PRODUCT",
    payload: { id: 1 },
});
//

// --> Cart Actions <--
// ADD
store.dispatch({
    type: "ADD_CART",
    payload: [{ id: 2 }],
});

