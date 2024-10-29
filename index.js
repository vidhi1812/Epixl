document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    // Input fields
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phoneNumber");
    const passwordInput = document.getElementById("password");

    // Error message elements
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Reset error messages
        firstNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        passwordError.textContent = "";

        let isValid = true;

        // Validate first name
        if (!firstNameInput.value.trim() || !/^[a-zA-Z]+$/.test(firstNameInput.value.trim())) {
            firstNameError.textContent = "Please enter a valid first name (letters only).";
            isValid = false;
        }

        // Validate last name
        if (!lastNameInput.value.trim() || !/^[a-zA-Z]+$/.test(lastNameInput.value.trim())) {
            lastNameError.textContent = "Please enter a valid last name (letters only).";
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate phone number
        const phonePattern = /^[0-9]{10}$/;
        if (!phoneInput.value.trim() || !phonePattern.test(phoneInput.value.trim())) {
            phoneError.textContent = "Please enter a valid phone number (10 digits only).";
            isValid = false;
        }

        // Validate password
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordInput.value.trim() || !passwordPattern.test(passwordInput.value.trim())) {
            passwordError.textContent = "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.";
            isValid = false;
        }

        // If form is valid, log the data to console
        if (isValid) {
            const formData = {
                first_name: firstNameInput.value.trim(),
                last_name: lastNameInput.value.trim(),
                email: emailInput.value.trim(),
                phone_number: phoneInput.value.trim(),
                password: passwordInput.value.trim()
            };

            console.log(formData);
            alert("Registration successful!");
            form.reset();
        }
    });
});
