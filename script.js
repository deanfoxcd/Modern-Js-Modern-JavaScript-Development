// Importing and exporting
/*

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);

// console.log(price, tq);

console.log('Importing Module');

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('sugar', 4);

// console.log(ShoppingCart);

import add from './shoppingCart.js';
add('milk', 2);

// Avoid using named and default imports in the same module
*/

// Top Level Await
/*
// Only works in modules but blocks the code being processed as it's not in a function

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Not very clean
// const lastPost = getLastPost(); // Will return a promise
// lastPost.then(last => console.log(last));

// Cleaner
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

// The Module Pattern
/*

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('pizza', 7);
shoppingCart2.addToCart('apple', 3);
*/

// Common JS Modules
/*

// Exporting
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart`);
  };

  // Import
  const { addToCart} = require('./shoppingCart.js')
  */

// Intro to npm

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 4 },
    { product: 'milk', quantity: 3 },
  ],
  user: { loggedIn: true },
};

console.log(state);

// This method doesn't actually create a proper clone. If I set loggedIn to false then the property for the 'clone' will also change
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateCloneDeep);

// From above
import add, { cart } from './shoppingCart.js';

// To update page without reloading (variable states are maintained)
if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable';
// import 'core-js/stable/array/find'

import 'regenerator-runtime/runtime';
