document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const cashOut = getElementField('cash-out-input-amount');
    if (isNaN(cashOut)) {
        alert('Please Try Again Letter');
        return;
    }
    const inputCashOut = getElementField('cash-out-pin-number');

    if (inputCashOut === 1234) {

        const balance = currentValue('current-value');

        const totalBalance = balance - cashOut;
        document.getElementById('current-value').innerText = totalBalance;
    }
    else {
        alert('No money for you ..... DGM...?')
    }
})