function getElementField(id) {
    const cashOut = document.getElementById(id).value;
    const stringToNumber = parseFloat(cashOut)
    return stringToNumber;

}
function currentValue(id) {
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    return currentNumber;
}