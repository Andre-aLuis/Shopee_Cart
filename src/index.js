const myCart = [];
const myWishList = [];

import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

console.log("Welcome to the your Shopee Cart");

const item1 = await createItem("MousePad", 13.5, 2, "Acessórios");
const item2 = await createItem("Teclado Mecânico", 135.89, 1, "Mouses");
const item3 = await createItem("Monitor 21 Pol ", 1850.35, 1, "Monitores");
const item4 = await createItem("HD Externo Samsung 1TB", 985.45, 1, "SSD");

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

await cartService.addItem(myWishList, item3);
await cartService.addItem(myWishList, item4);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

console.log("WhishList Shopee");
await cartService.displayCart(myWishList);