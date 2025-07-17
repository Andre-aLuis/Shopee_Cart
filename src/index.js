const myCart = [];
const myWishList = [];

import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

console.log("Welcome to the your Shopee Cart");

const item1 = await createItem("MousePad", 13.5, 2);
const item2 = await createItem("Teclado Mecânico", 135.89, 1);

// console.log(await item2.subtotal());
// console.log(await item1.subtotal());
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

// console.log("Shopee Cart WhishList is");
// await cartService.calculateTotal(myWishList);

// await cartService.deleteItem(myCart, item1.name);

// console.log("Shopee Cart Total is");
// await cartService.calculateTotal(myCart);

// console.log("Shopee Cart WhishList is");
// await cartService.calculateTotal(myWishList);