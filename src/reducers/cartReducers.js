export function cartReducers(state={cart: []}, action){
    switch(action.type){
        case "ADD_CART":
        return {cart: [...state.cart, ...action.payload]}
        break;
    }
    return state
}