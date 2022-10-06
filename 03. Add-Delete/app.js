function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.createElement('li');
    let ul = document.getElementById('items');
    let a = document.createElement('a');
    a.innerHTML = `<a href="#">[Delete]</a>`;

    if (input.value.length === 0) {
        return
    }

    list.textContent = input.value;
    list.appendChild(a);
    
    a.addEventListener('click', function(event) {
        list.remove();
    })

    ul.appendChild(list);
    
    input.value = '';
}