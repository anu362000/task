document.addEventListener('focusout', function (event) {
    let emailInput = document.getElementById('emailInput');
    let emailValue = emailInput.value.trim();
    if (!emailValue.includes("@")) {
        EmailError.textContent = 'Email is required';
    }
});
    document.addEventListener('focusout', function (event) {
    if (event.target === passwordInput) {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password is required';
        } else {
            passwordError.textContent = ''; // Clear the error message if the input is valid
        }
        }
});
 const myButton = document.getElementById('myButton');
 myButton.addEventListener('click', function() {
            alert('Button clicked!');
        });