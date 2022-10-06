function deleteByEmail() {
    let input = document.getElementsByName('email')[0];
    let table = document.getElementById('customers').querySelectorAll('tbody tr td');
    let result = document.getElementById('result');
    
    for (let cell of table) {
        if (cell.textContent === input.value.trim()) {
            cell.parentElement.remove();
            result.textContent = "Deleted.";
        } else {
            result.textContent = "Not found.";
        }
    }
}