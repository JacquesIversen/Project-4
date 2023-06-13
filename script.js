// Sign up form 
document.getElementById('sign-form').addEventListener('submit', function(event){
    event.preventDefault()
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPw = document.getElementById('confirm-pw');
    const status = document.getElementById('status-message');

    // Incorrect Password
    if (password.value !== confirmPw.value) {
        status.textContent = 'Password doenst match'
        password.value = '';
        confirmPw.value = '';
        console.log('wrong')
    } else {
        console.log('user success');
        document.getElementById('sign-form').reset();
        status.textContent = 'User created'
    }
})
