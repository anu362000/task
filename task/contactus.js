function validateFullName() {
    const fullNameInput = document.getElementById('fullNameInput');
    const fullNameValue = fullNameInput.value.trim();
    const fullNameError = document.getElementById('fullNameError');

    if (fullNameValue === '') {
        fullNameError.textContent = 'Full name is required';
    } else {
        fullNameError.textContent = '';
    }
}

function validateEmail() {
    let emailInput = document.getElementById('emailInput');
    let emailValue = emailInput.value.trim();
    if (!emailValue.includes("@")) {
        EmailError.textContent = 'Email is required';
    } else {
        EmailError.textContent = '';
    }
}

function validatePhoneNumber() {
    const phoneNumberInput = document.querySelector('input[type="number"]');
    const phoneNumberValue = phoneNumberInput.value.trim();

    if (phoneNumberValue === '' || phoneNumberValue.length < 10) {
        phoneError.textContent = 'Please enter a valid phone number with at least 10 digits.';
    } else {
        phoneError.textContent = '';
    }
}

function validateMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageValue = messageInput.value.trim();
    const messageError = document.getElementById('messageError');

    if (messageValue === '') {
        messageError.textContent = 'Message is required';
    }
}

// Button-event
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function () {
    alert('Button clicked!');
});