// Sign up form 
document.getElementById('sign-form').addEventListener('submit', function (event) {
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
        const requestData = {
            username: username,
            password: password
        }
        console.log("Before")
        fetch('https://8080-jacquesiversen-project4-s74konprn5e.ws-eu99.gitpod.io/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
            .then(response => response.json())
            .then(data => {
                // Process the response data
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
            console.log("after")
    }
})