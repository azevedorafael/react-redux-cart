export function addToCart(product){
    return {
        type: "ADD_TO_CART",
        payload: product,
    }
}

export function deleteCartItem(cart){
    return {
        type: "DELETE_CART_ITEM",
        payload: cart,
    }
}

export function updateCart(_id, unit ){
    return {
        type: "UPDATE_CART",
        _id: _id,
        unit: unit
    }
}