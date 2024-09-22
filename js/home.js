document.getElementById('add-Money').addEventListener('click', function (event) {
    event.preventDefault()
    const currentAmount = document.getElementById('amount').value;
    const currentPinPass = document.getElementById('pin-pass').value;
    const currentValues = document.getElementById('currentValue').innerText;

    //String to number
    const currentTotalAmount = parseFloat(currentAmount);
    const currentTotalNumber = parseFloat(currentValues)

    if (currentPinPass === '1234') {

        const totalValue = document.getElementById('currentValue');
        const totalNumber = currentTotalNumber + currentTotalAmount;
        totalValue.innerText = totalNumber;
    }
    else {
        alert('Please try again')
    }
})