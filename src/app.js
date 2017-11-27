import {createStore} from 'redux';

// Reducers
const reducer = function(state=[{}], action){
    switch(action.type){
        case "POST_PRODUCT":
            return state = action.payload;
        break;
    }
    return state;
};

//Store
const store = createStore(reducer);

store.subscribe(function(){
    console.log('current state is: ' , store.getState());
    console.log(`ID: ${store.getState()[1].id}`);
    console.log(`Title: ${store.getState()[1].title}`);
    console.log(`Description: ${store.getState()[1].description}`);
    console.log(`Price: ${store.getState()[1].price}`);
});

// Actions
store.dispatch({
    type:"POST_PRODUCT",
    payload:[{
        id:1,
        title: 'Camiseta',
        description: 'very fresh new one',
        price: 33.33
    },
    {
        id:2,
        title: 'Calça',
        description: 'used',
        price: 53.33
    },
    ]
});
