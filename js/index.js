
document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = document.getElementById('income').value;
    if (isNaN(income)) {
        alert('invalid value. Please enter a number')
        return;
    }
    const foodExpense = document.getElementById('food').value;
    if (isNaN(foodExpense)) {
        alert('invalid value. Please enter a number')
        return;
    }
    const rentExpense = document.getElementById('rent').value;
    if (isNaN(rentExpense)) {
        alert('invalid value. Please enter a number')
        return;
    }
    const clothExpense = document.getElementById('cloth').value;
    if (isNaN(clothExpense)) {
        alert('invalid value. Please enter a number')
        return;
    }

    const totalExpenses = document.getElementById('total-expenses');

    const expenses = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothExpense);
    totalExpenses.innerText = expenses;
    const remainingBalance = document.getElementById('remaining-balance');
    const balance = parseInt(income) - parseInt(expenses);
    remainingBalance.innerText = balance;
});

document.getElementById('discount-btn').addEventListener('click', function(){
    const income = document.getElementById('income').value;
    if (isNaN(income)) {
        alert('invalid value. Please enter a number')
        return;
    }
    const discountField = document.getElementById('discount-field').value;
    if (isNaN(discountField)) {
        alert('invalid value. Please enter a number')
        return;
    }
    const remainingBalance = document.getElementById('remaining-balance').innerText;

    const savingAmount = document.getElementById('saving-amount');
    
    const discount = parseInt(income) * (parseInt(discountField)) / 100;
    
    savingAmount.innerText = discount;
    const rBalance = document.getElementById('balance');
    rBalance.innerText = (parseInt(remainingBalance) - parseInt(discount)); 
})