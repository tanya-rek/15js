function submitForm() {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;

    warnmessage.innerHTML = "";

    if (!firstName || !isNaN(firstName)) {
        warnmessage.innerHTML += 'Please enter a proper first name!<br>';
    }
    if (!lastName || !isNaN(lastName)) {
        warnmessage.innerHTML += 'Please enter a proper last name!<br>';
    } 
    if (!email) {
        warnmessage.innerHTML += 'Please enter a proper email!<br>';
    } 
    if (!password) {
        warnmessage.innerHTML += 'Password is empty.<br>';
    } 
    if (password.length <= 5) {
        warnmessage.innerHTML += 'Your password is too short!<br>';
    } 
    if (!repeatPassword) {
        warnmessage.innerHTML += 'Confirmed password is empty.<br>';
    } 
    if (password !== repeatPassword) {
        warnmessage.innerHTML += 'Passwords do not match!<br>';
    } 
    
    if (warnmessage.innerHTML === ""){
        //setTimeout is used to slow down the alert function, because it shows before all warning messages are removed from the modal window.
        setTimeout(function() { alert(`Welcome, ${firstName}!`); }, 200);
    }
}