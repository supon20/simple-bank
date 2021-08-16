document.getElementById('login-submit').addEventListener('click', function () {
    // console.log("All ok to this button");
    // get email user
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    // console.log(userPass);

    if (userEmail == 'supon@gmail.com' && userPass == '1234') {
        // console.log("This is valid user");
        window.location.href = 'banking.html';
    }
})