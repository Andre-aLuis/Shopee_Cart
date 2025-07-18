//quais acões o iten faz

//CASOS DE USO DOS ITEMS

//-> criar item com subtotal certo
async function creteItem(name, price, quantity, category) {
    return {
        name,
        price,
        quantity,
        category, 
        subtotal: () => price * quantity,
    }
}

export default creteItem;

//-> 