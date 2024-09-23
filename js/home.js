document.getElementById('add-money').addEventListener('click', function (event) {
        event.preventDefault()

        const amountIn = document.getElementById('amount-input').value;
        const inputPin = document.getElementById('input-pin').value;
        const currentValue = document.getElementById('current-amount').innerText;

        // String to number 
        const amountNumber = parseFloat(amountIn);
        const currentNumber = parseFloat(currentValue)

        if (inputPin === '1111') {
                console.log('okay come here');
                const amountTotal = currentNumber - amountNumber;
                document.getElementById('current-amount').innerText = amountTotal;
        }
        else {
                alert('Please try again')
        }
})