// document.getElementById('add-Money').addEventListener('click', function (event) {
//     event.preventDefault();
//     const cashOutAmount = document.getElementById('cash-out-amount').value;
//     const cashOutPins = document.getElementById('pin-pass').value;
//     const currentAmount = document.getElementById('amount').innerText;


//     // String to number 
//     const cashOutTotal = parseFloat(cashOutAmount)
//     const cashOutTotalAmount = parseFloat(currentAmount)

//     if (cashOutPins === '1234') {

//         const cashOutBalance = cashOutTotalAmount + cashOutTotal;
//         const prev = document.getElementById('amount');
//         prev.innerText = cashOutBalance;

//     }
// })

document.getElementById('add-Money').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('clicked');
})