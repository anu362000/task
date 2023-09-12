    function validateFirstName() {
        const firstNameInput = document.getElementById('firstNameInput');
    const firstNameValue = firstNameInput.value.trim();
    const firstNameError = document.getElementById('firstNameError');
    const pattern = /[0-9_!@#$%^&*()+=\-[\]{}|\\:;"'<>,.?/~]/;
    if (pattern.test(firstNameValue)){
        document.getElementById('firstNameError').textContent = "First name cannot contain digits, underscores, or special symbols.";
        } else {
            document.getElementById('firstNameError').textContent = "";
}
    // Check if the first name is empty
    /*if (firstNameValue === '') {
        firstNameError.textContent = "First name is required.";
    } else {
        firstNameError.textContent = ""; // Clear the error message if the first name is not empty
    }*/
}
    function validateLastName() {
        const lastNameInput = document.getElementById('lastNameInput');
        const lastNameValue = lastNameInput.value.trim();
        const lastNameError = document.getElementById('lastNameError');
        const pattern = /[0-9_!@#$%^&*()+=\-[\]{}|\\:;"'<>,.?/~]/;
        if (pattern.test(lastNameValue)){
            document.getElementById('lastNameError').textContent = "Last name cannot contain digits, underscores, or special symbols.";
            } else {
                document.getElementById('lastNameError').textContent = "";
    }
}
    function validateDob() {
        const dobInput = document.getElementById('dobInput');
        const dobError = document.getElementById('dobError');

        // Get the selected date from the input field
        const dobValue = new Date(dobInput.value);
        const currentDate = new Date();

        // Calculate the age
        const age = currentDate.getFullYear() - dobValue.getFullYear();

        // Check if the age is less than 18
        if (age < 18) {
            dobError.textContent = 'Age must be at least 18 years old.';
        } else {
            dobError.textContent = ''; // Clear the error message if the age is valid
        }
    }
    function validateAge() {
        // Get the age input element
        const ageInput = document.getElementById('ageInput');
        
        // Get the entered age value as an integer
        const ageValue = parseInt(ageInput.value);

        // Get the error message element
        const ageError = document.getElementById('ageError');

        // Clear any previous error message
        ageError.textContent = '';

        // Check if the age is less than 18
        if (isNaN(ageValue) || ageValue < 18) {
            ageError.textContent = 'Age must be at least 18 years old';
        }
    }
    
    function validateEmail() {
        let emailInput = document.getElementById('emailInput');
        let emailValue = emailInput.value.trim();
        if (!emailValue.includes("@")) {
            emailError.textContent = 'Email is required';
        }
    }
    function validateAddress() {
        // Get the address input element
        const addressInput = document.getElementById('addressInput');

        // Get the value of the input
        const addressValue = addressInput.value.trim();

        // Get the error message element
        const addressError = document.getElementById('addressError');

        // Clear any previous error message
        addressError.textContent = '';

        // Check if the address is empty
        if (addressValue === ''|| addressValue.length < 5 ) {
            addressError.textContent = 'Address is required';
        }
    }
    function validatePhoneNumber() {
        const phoneNumberInput = document.querySelector('input[type="number"]');
        const phoneNumberValue = phoneNumberInput.value.trim();

        if (phoneNumberValue === '' || phoneNumberValue.length < 10) {
            phoneNumberError.textContent = "Please enter at least 10 digits.";
        }
    }
    function updateCities() {
        const stateSelect = document.getElementById('stateSelect');
        const citySelect = document.getElementById('citySelect');
        const stateError = document.getElementById('stateError');
        const cityError = document.getElementById('cityError');

        // Clear any previous error messages
        stateError.textContent = '';
        cityError.textContent = '';

        // Get the selected state
        const selectedState = stateSelect.value;

        // Define city options based on the selected state
        const cityOptions = {
            KARNATAKA: ['Bangalore', 'Mysore', 'Hubli', 'Belgaum'],
            KERALA: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur'],
            MAHARASTRA: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
            TAMILNADU: ['Chennai', 'Coimbatore', 'Madurai', 'Salem']
        };

        // Clear existing options in the "City" dropdown
        citySelect.innerHTML = '';

        // If a valid state is selected, populate the "City" dropdown with options
        if (selectedState in cityOptions) {
            cityOptions[selectedState].forEach((city) => {
                const option = document.createElement('option');
                option.textContent = city;
                citySelect.appendChild(option);
            });
        } else {
            // If an invalid state is selected, display an error message
            cityError.textContent = 'Please select a valid state.';
        }
    }
    function validateUsername() {
        // Get the username input element
        const usernameInput = document.getElementById('usernameInput');

        // Get the value of the input and trim any whitespace
        const usernameValue = usernameInput.value.trim();

        // Get the error message element
        const usernameError = document.getElementById('usernameError');

        // Define the validation criteria (e.g., at least 5 characters)
        const minLength = 5;

        // Clear any previous error message
        usernameError.textContent = '';

        // Check if the username meets the criteria
        if (usernameValue.length < minLength) {
            usernameError.textContent = `Username must be at least ${minLength} characters long.`;
        }
    }
    function validatePassword() {
        // Get the password input element
        const passwordInput = document.getElementById('passwordInput');

        // Get the value of the input
        const passwordValue = passwordInput.value;

        // Get the error message element
        const passwordError = document.getElementById('passwordError');

        // Define the validation criteria (e.g., at least 8 characters)
        const minLength = 8;

        // Clear any previous error message
        passwordError.textContent = '';

        // Check if the password meets the criteria
        if (passwordValue.length < minLength) {
            passwordError.textContent = `Password must be at least ${minLength} characters long.`;
        }
    }

    function validateConfirmPassword() {
        // Get the password and confirm password input elements
        const passwordInput = document.getElementById('passwordInput');
        const confirmPasswordInput = document.getElementById('confirmPasswordInput');

        // Get the values of both inputs
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        // Get the error message elements
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        // Clear any previous error messages
        confirmPasswordError.textContent = '';

        // Check if the confirm password matches the password
        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.textContent = 'Passwords do not match.';
        }
    }
    // Button-event
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function () {
        alert('Registered Successfully...!');
    });