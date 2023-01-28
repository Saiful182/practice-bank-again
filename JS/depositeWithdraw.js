function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}
function getPriviousInnerTextValue(textId) {
    const priviousText = document.getElementById(textId);
    const priviousTextValue = parseFloat(priviousText.innerText);
    return priviousTextValue;
}
document.getElementById('deposite-btn').addEventListener('click', function () {

    const inputDepositevalue = getInputValueById('input-deposite');
    if (isNaN(inputDepositevalue)) {
        alert('Please Type a valid Number');
        inputDeposite.value = '';
    }
    else {
        const priviousDepositeValue = getPriviousInnerTextValue('privious-deposite');
        const newDeposite = priviousDepositeValue + inputDepositevalue
        priviousDeposite.innerText = newDeposite.toFixed(2)
        const priviousBalanceValue = getPriviousInnerTextValue('privious-balance');
        const newBalance = priviousBalanceValue + inputDepositevalue;
        priviousBalance.innerText = newBalance.toFixed(2);
        inputDeposite.value = '';
    }

})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const inputWithdrawValue = getInputValueById('input-withdraw');

    if (isNaN(inputWithdrawValue)) {
        alert('Please Type a valid Number');
        inputWithdraw.value = '';
    }
    else {

        const priviousDepositeValue = getPriviousInnerTextValue('privious-withdraw');
        const newWithdraw = priviousWithdrawValue + inputWithdrawValue;
        priviousWithdraw.innerText = newWithdraw.toFixed(2);

        const priviousBalanceValue = getPriviousInnerTextValue('privious-balance');
        const newBalance = priviousBalanceValue - inputWithdrawValue;
        priviousBalance.innerText = newBalance.toFixed(2);

        inputWithdraw.value = '';
    }
})