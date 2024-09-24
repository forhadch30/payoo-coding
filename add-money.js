document.getElementById('btn-amount').addEventListener('click', function (event) {
    event.preventDefault()

    const addMoney = getElementFieldById('input-amount');
    if (isNaN(addMoney)) {
        alert('Please try your number')
        return;
    }
    const inputPin = getElementFieldById('pin-number');

    if (inputPin === 1234) {
        const balance = getElementTextField('current-value');
        const totalBalance = balance + addMoney;

        document.getElementById('current-value').innerText = totalBalance
    }
    else {
        alert('Field to add money.?')
    }
})