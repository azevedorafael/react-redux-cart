export function cartReducers(state={cart: []}, action){
    switch(action.type){
        case "ADD_TO_CART":
        return {...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQuantity: totals(action.payload).qty
                }
        break;

        case "DELETE_CART_ITEM":
        return {...state,
                cart:action.payload,
                totalAmount: totals(action.payload).amount,
                totalQuantity: totals(action.payload).qty
                }
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

                    return {
                        ...state,
                        cart:cartUpdate,
                        totalAmount: totals(cartUpdate).amount,
                        totalQuantity: totals(cartUpdate).qty                        
                }
        break;
    }
    return state
}

export function totals(payloadArr){

    const totalAmount = payloadArr.map(function(cartArr){
        return cartArr.price * cartArr.quantity;
    }).reduce(function(a,b){
        return a+b;
    },0);

    const totalQuantity = payloadArr.map(function(qty){
        return qty.quantity;
    }).reduce(function(a,b){
        return a + b;
    },0)

    return {amount: totalAmount.toFixed(2),qty: totalQuantity}
}