export function cartReducers(state={cart: []}, action){
    switch(action.type){
        case "ADD_TO_CART":
        return {cart: [...state, ...action.payload]}
        break;

        case "DELETE_CART_ITEM":
        return {cart: [...state, ...action.payload]}
        break;

        
        case "UPDATE_CART":
                    // Create temp copy of the array of products
                    const currentProductToUpdate = [...state.cart]
                    // Find the product by the index
                    const indexToUpdate = currentProductToUpdate.findIndex(
                        function (product) {
                            return product._id === action._id;
                        })
                    // Create a new product object
                    const newProductToUpdate = {
                        ...currentProductToUpdate[indexToUpdate],
                        quantity: currentProductToUpdate[indexToUpdate].quantity + action.unit
                    }
                    //remove the product from the index and replace
                    let cartUpdate = [...currentProductToUpdate.slice(0, indexToUpdate), newProductToUpdate,
                        ...currentProductToUpdate.slice(indexToUpdate + 1)]
            
                    return {...state,cart:cartUpdate}
        break;
    }
    return state
}