export function getProducts(product) {
    return {
        type: "GET_PRODUCT",
    }
}

export function postProducts(product) {
    return {
        type: "POST_PRODUCT",
        payload: product
    }
}

export function updateProducts(product) {
    return {
        type: "UPDATE_PRODUCT",
        payload: product,
    }
}

export function deleteProducts(id) {
    return {
        type: "DELETE_PRODUCT",
        payload: id,
    }
}
