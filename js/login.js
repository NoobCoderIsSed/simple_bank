document.getElementById('btn').addEventListener('click',function() {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if (email === 'mazbha@gmail.com' && password === 'Hi') {
            window.location.href = 'bank.html';
        } else {
            console.log('Login Unsuccessful')
        }
});