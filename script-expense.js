const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');
let total = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && amount) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${description}: $${amount.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            total -= amount;
            totalDisplay.textContent = total.toFixed(2);
            expenseList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        expenseList.appendChild(listItem);

        total += amount;
        totalDisplay.textContent = total.toFixed(2);

        form.reset();
    }
});
