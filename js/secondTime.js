function getElementFieldById(id) {
    const addMoney = document.getElementById(id).value;
    const stringToNumber = parseFloat(addMoney)
    return stringToNumber;
}

function getElementTextField(id) {
    const textAmount = document.getElementById(id).innerText;
    const stringTextNumber = parseFloat(textAmount);
    return stringTextNumber;
}

function transactionSection(id) {
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}