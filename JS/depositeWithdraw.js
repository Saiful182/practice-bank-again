document.getElementById('deposite-btn').addEventListener('click', function () {
    const inputDeposite = document.getElementById('input-deposite');
    const depositevalue = parseFloat(inputDeposite.value);
    inputDeposite.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click'), function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const depositevalue = parseFloat(inputWithdraw.value);
    inputWithdraw.value = '';
}