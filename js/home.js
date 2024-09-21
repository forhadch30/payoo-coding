document.getElementById('addMoney').addEventListener('click', function (event) {
    event.preventDefault();

    const inputAmount = document.getElementById('amount').value;
    console.log(inputAmount);
    
    const inputField = document.getElementById('pin-pass').value;
    console.log(inputField);

    // const currentValue = document.getElementById('currentValue').innerText;
    // console.log(currentValue);

    // const total = inputAmount + currentValue;
    // const number = parseFloat(total);
    // console.log(number);
})