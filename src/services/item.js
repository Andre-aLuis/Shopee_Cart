//quais acões o iten faz

//CASOS DE USO DOS ITEMS

//-> criar item com subtotal certo
async function creteItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default creteItem;

//-> 