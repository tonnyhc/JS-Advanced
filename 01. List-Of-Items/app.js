function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.createElement('li');
    let ul = document.getElementById('items');

    list.textContent = input.value;
    ul.appendChild(list);
    // input.value = '';

}