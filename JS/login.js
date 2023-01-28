document.getElementById('login-btn').addEventListener('click', function () {
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value
    console.log(email);
    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;
    console.log(password);


    if (email == 'robin@gmail.com' && password == 'robin') {
        console.log('Ready To GO');
    }
    else {
        console.log('You are not authorized to go further');
    }
})