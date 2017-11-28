// Products Reducers Must not Mutate the State - use PURE Funcitons
export function productsReducers (state = { products: [] }, action) {
    switch (action.type) {
        case "POST_PRODUCT":
            // let products = state.products.concat(action.payload);
            //     return {products};
            //The tow lines above can be changed by the spread operator below
            return { products: [...state.products, ...action.payload] };
            break;

        case "DELETE_PRODUCT":
            // Create temp copy of the array of products
            const currentProductToDelete = [...state.products]
            // Find the product by the index
            const indexToDelete = currentProductToDelete.findIndex(
                function (product) {
                    return product.id === action.payload.id;
                })
            // Delete the product from the array
            return {
                products: [...currentProductToDelete.slice(0, indexToDelete),
                ...currentProductToDelete.slice(indexToDelete + 1)]
            }
            break;

        case "UPDATE_PRODUCT":
            // Create temp copy of the array of products
            const currentProductToUpdate = [...state.products]
            // Find the product by the index
            const indexToUpdate = currentProductToUpdate.findIndex(
                function (product) {
                    return product.id === action.payload.id;
                })
            // Create a new product object
            const newProductToUpdate = {
                ...currentProductToUpdate[indexToUpdate],
                title: action.payload.title
            }
            //remove the product from the index and replace
            return {
                products: [...currentProductToUpdate.slice(0, indexToUpdate), newProductToUpdate,
                ...currentProductToUpdate.slice(indexToUpdate + 1)]
            }
            break;
        }
            return state;
    };
// Reducers Must not Mutate the State - use PURE Funcitons
const reducer = function (state = { products: [] }, action) {
    switch (action.type) {
        case "POST_PRODUCT":
            // let products = state.products.concat(action.payload);
            //     return {products};
            //The tow lines above can be changed by the spread operator below
            return { products: [...state.products, ...action.payload] };
            break;

        case "DELETE_PRODUCT":
            // Create temp copy of the array of products
            const currentProductToDelete = [...state.products]
            // Find the product by the index
            const indexToDelete = currentProductToDelete.findIndex(
                function (product) {
                    return product.id === action.payload.id;
                })
            // Delete the product from the array
            return {
                products: [...currentProductToDelete.slice(0, indexToDelete),
                ...currentProductToDelete.slice(indexToDelete + 1)]
            }
            break;

        case "UPDATE_PRODUCT":
            // Create temp copy of the array of products
            const currentProductToUpdate = [...state.products]
            // Find the product by the index
            const indexToUpdate = currentProductToUpdate.findIndex(
                function (product) {
                    return product.id === action.payload.id;
                })
            // Create a new product object
            const newProductToUpdate = {
                ...currentProductToUpdate[indexToUpdate],
                title: action.payload.title
            }
            //remove the product from the index and replace
            return {
                products: [...currentProductToUpdate.slice(0, indexToUpdate), newProductToUpdate,
                ...currentProductToUpdate.slice(indexToUpdate + 1)]
            }
            break;
        }
            return state;
    };
