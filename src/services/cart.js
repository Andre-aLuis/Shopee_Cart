//quais ações o carrinho deve fazer


// CASOS DE USO
// ✅> adicionar items ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);    
}

//->calcular o total do carrinho
async function calculateTotal(userCart){
    console.log("\nShopee Cart Total is");
    const result = userCart.reduce((total, item)=> total  + item.subtotal(), 0);
    console.log(`🎁Total: ${result}`);   
}

//-> excluir items ao carrinho
async function deleteItem(userCart, itemName) {
  const index =  userCart.findIndex((item) => item.name === itemName);

   if (index !== -1){
    userCart.splice(index, 1);
   }
}
//->remover um item do carrinho(diminiu um item)
async function removeItem(userCart, item) {
   const indexFound = userCart.findIndex((p) => p.name === item.name);
   
   if (indexFound == -1){
      console.log("Item não encontrado");
      return;
   }

   if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -=1;
        return;
   }

   if (userCart[indexFound].quantity = 1){
      userCart.splice(indexFound, 1);
      return;
   }


}

async function displayCart(userCart) {
    console.log("\n Shopee Cart List");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}X | Subtotal = ${item.subtotal()}`);
    })  
    
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}