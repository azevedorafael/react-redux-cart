export function addCart(product){
    return {
        type: "ADD_CART",
        payload: product,
    }
}