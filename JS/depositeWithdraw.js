document.getElementById('deposite-btn').addEventListener('click', function () {
    const inputDeposite = document.getElementById('input-deposite');
    const inputDepositevalue = parseFloat(inputDeposite.value);


    const priviousDeposite = document.getElementById('privious-deposite');
    const priviousDepositeValue = parseFloat(priviousDeposite.innerText);

    const newDeposite = priviousDepositeValue + inputDepositevalue
    priviousDeposite.innerText = newDeposite.toFixed(2)


    const priviousBalance = document.getElementById('privious-balance');
    const priviousBalanceValue = parseFloat(priviousBalance.innerText);
    console.log(typeof (priviousBalanceValue));
    const newBalance = priviousBalanceValue + inputDepositevalue;

    priviousBalance.innerText = newBalance.toFixed(2);

    inputDeposite.value = '';


})

document.getElementById('withdraw-btn').addEventListener('click'), function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const depositevalue = parseFloat(inputWithdraw.value);
    inputWithdraw.value = '';
}