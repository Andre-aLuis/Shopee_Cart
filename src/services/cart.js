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

    // A condição correta para comparação é '===' ou '=='
    if (userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }


}

// ✅ FUNÇÃO ALTERADA PARA EXIBIR POR CATEGORIA
async function displayCart(userCart) {
    console.log("\n🛍️ Carrinho de Compras por Categoria 🛍️");

    // Crie o formatador de moeda uma única vez
    const currencyFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    // 1. Agrupe os itens de forma concisa
    const itemsByCategory = Object.groupBy(userCart, ({ category }) => category);

    // 2. Exiba os itens com o loop e a formatação melhorados
    for (const [category, items] of Object.entries(itemsByCategory)) {
        console.log(`\n----- Categoria: ${category.toUpperCase()} -----`);
        items.forEach((item, index) => {
            const formattedPrice = currencyFormatter.format(item.price);
            const formattedSubtotal = currencyFormatter.format(item.subtotal());

            console.log(`  ${index + 1}. ${item.name} - ${formattedPrice} | ${item.quantity}x | Subtotal = ${formattedSubtotal}`);
        });
    }       
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}