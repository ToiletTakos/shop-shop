// UPDATE_PRODUCTS is used by the ProductList component. Right now, we're getting all our product data from the serve and Apollo caches the results.
//The end goal here is to store the data retrieved from products by Apollo in this global state.
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// UPDATE_CATEGORIES same process as UPDATE_PRODUCTS 
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
//UPDATE_CURRENT_CATEGORY  is sort of the connecting piece of data for the previous two actions.
//we want to be able to select a category from the state created by the UPDATE_CATEGORIES action and display the products 
//for that category from the list we create from the UPDATE_PRODUCTS action
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

// statements that represent all of the actions you might want to perform with a shopping cart.
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANITITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';