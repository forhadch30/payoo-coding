document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const cashOutPins = document.getElementById('cash-out-pin').value;
    const currentAmount = document.getElementById('cash-out-balance').innerText;


    // String to number 
    const cashOutTotal = parseFloat(cashOutAmount)
    const cashOutTotalAmount = parseFloat(currentAmount)

    if (cashOutPins === '1234') {

        const cashOutBalance = cashOutTotalAmount - cashOutTotal;
        const prev = document.getElementById('cash-out-balance');
        prev.innerText = cashOutBalance;

    }
})