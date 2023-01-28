document.getElementById('deposite-btn').addEventListener('click', function () {
    const inputDeposite = document.getElementById('input-deposite');
    const inputDepositevalue = parseFloat(inputDeposite.value);
    if (isNaN(inputDepositevalue)) {
        alert('Please Type a valid Number');
        inputDeposite.value = '';
    }
    else {
        const priviousDeposite = document.getElementById('privious-deposite');
        const priviousDepositeValue = parseFloat(priviousDeposite.innerText);

        const newDeposite = priviousDepositeValue + inputDepositevalue
        priviousDeposite.innerText = newDeposite.toFixed(2)


        const priviousBalance = document.getElementById('privious-balance');
        const priviousBalanceValue = parseFloat(priviousBalance.innerText);
        const newBalance = priviousBalanceValue + inputDepositevalue;

        priviousBalance.innerText = newBalance.toFixed(2);

        inputDeposite.value = '';
    }

})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawValue = parseFloat(inputWithdraw.value);

    if (isNaN(inputWithdrawValue)) {
        alert('Please Type a valid Number');
        inputWithdraw.value = '';
    }
    else {
        const priviousWithdraw = document.getElementById('privious-withdraw');
        const priviousWithdrawValue = parseFloat(priviousWithdraw.innerText);

        const newWithdraw = priviousWithdrawValue + inputWithdrawValue;
        priviousWithdraw.innerText = newWithdraw.toFixed(2)


        const priviousBalance = document.getElementById('privious-balance');
        const priviousBalanceValue = parseFloat(priviousBalance.innerText);

        const newBalance = priviousBalanceValue - inputWithdrawValue;
        priviousBalance.innerText = newBalance.toFixed(2);

        inputWithdraw.value = '';
    }
})