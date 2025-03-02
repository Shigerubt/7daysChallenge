let shoppingList = [];

function addItem() {
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;

    const item = {
        name: productName,
        category: category,
        quantity: quantity
    };

    shoppingList.push(item);

    // Clear the form
    document.getElementById('shoppingForm').reset();
}

function viewList() {
    let list = "Lista de Compras:\n";
    shoppingList.forEach(item => {
        list += `Producto: ${item.name}, Categoría: ${item.category}, Cantidad: ${item.quantity}\n`;
    });
    alert(list);
}