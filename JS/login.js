document.getElementById('login-btn').addEventListener('click', function () {
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value
    console.log(email);
    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;
    console.log(password);


    if (email == 'robin@gmail.com' && password == 'robin') {
        window.location.href = 'bank.html';
    }
    else {
        alert('You are not authorized to go further');
    }
})

