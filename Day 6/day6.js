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

    // Update the list view
    viewList();
}

function viewList() {
    const listContainer = document.getElementById('shoppingList');
    listContainer.innerHTML = ''; // Clear the current list

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'flex items-center mb-2';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'mr-2';
        checkbox.dataset.index = index;

        const itemText = document.createElement('p');
        itemText.textContent = `Producto: ${item.name}, Categoría: ${item.category}, Cantidad: ${item.quantity}`;
        itemText.className = 'flex-grow';

        listItem.appendChild(checkbox);
        listItem.appendChild(itemText);
        listContainer.appendChild(listItem);
    });
}

function deleteSelectedItems() {
    const checkboxes = document.querySelectorAll('#shoppingList input[type="checkbox"]:checked');
    const indicesToDelete = Array.from(checkboxes).map(checkbox => parseInt(checkbox.dataset.index));

    shoppingList = shoppingList.filter((_, index) => !indicesToDelete.includes(index));

    // Update the list view
    viewList();
}