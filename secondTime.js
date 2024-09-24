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