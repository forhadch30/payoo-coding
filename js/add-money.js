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

        document.getElementById('current-value').innerText = totalBalance;
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} TK. Balance:${totalBalance}`;
        
        document.getElementById('transaction-area').appendChild(p)
    }
    else {
        alert('Field to add money.?')
    }
})