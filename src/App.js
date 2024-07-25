// Project 4
// Name: Robert Fabros
// Date: November 25, 2023
// Description: My Portfolio Website

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the submit event
 * return   True if no validation errors; False if the form has
 *          validation errors
 */

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the submit event
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
    //	Hides all error elements on the page
    hideAllErrors();

    //	Determine if the form has errors
    if (formHasErrors()) {
        // 	Prevents the form from submitting
        e.preventDefault();
        return false;
    }

    return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e A reference to the reset event
 * return  True allows the reset to happen; False prevents
 *         the browser from resetting the form.
 */
function resetForm(e) {
    // Confirm that the user wants to reset the form.
    if (!confirm('Clear form?')) {
        // Prevents the form from resetting
        e.preventDefault();
    } else {
        // Ensure all error fields are hidden
        hideAllErrors();

        // Set focus to the first text field on the page
        document.getElementById("name").focus();
    }
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
    let errorFlag = false;

    let name = document.getElementById("name");
    let nameError = document.getElementById("name_error");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let messageError = document.getElementById("message_error");
    let emailFormatError = document.getElementById("emailformat_error");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let captchaError = document.getElementById("captcha_error");

    // Validate name
    if (name.value == "") {
        // Give an error message
        nameError.style.display = "block";
        name.focus();
        name.select();

        if (!errorFlag) {
            name.focus();
            name.select();
        }

        errorFlag = true;
    }


    // Validate email
    if (email.value.trim() === "") {
        // Validation issue
        let emailError = document.getElementById("email_error");
        emailError.style.display = "block";
        email.focus();
        errorFlag = true;
    } else if (!emailRegex.test(email.value)) {
        // Validation issue
        emailFormatError.style.display = "block";
        email.focus();
        errorFlag = true;
    }

    // Validate message
    if (message.value == "") {
        // Give an error message
        messageError.style.display = "block";
        message.focus();
        message.select();

        if (!errorFlag) {
            name.focus();
            name.select();
        }

        errorFlag = true;
    }

    // Validate reCAPTCHA
    let recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse || recaptchaResponse === "") {
        // Validation issue
        captchaError.style.display = "block";
        errorFlag = true;
    }

    // Get the phone input value
    var phoneInput = document.getElementById('phone');
    var phoneValue = phoneInput.value;

    // Get the error message element
    var phoneError = document.getElementById('phone_error');

    // Check if the phone number is empty
    if (phoneValue.trim() === '') {
        // Show the error message
        phoneError.textContent = '* Please enter your phone number.';
        phoneError.style.display = 'block';
    } else if (!/^\d+$/.test(phoneValue)) {
        // Check if the phone number contains only numeric characters
        phoneError.textContent = '* Please enter a valid phone number with only numeric characters.';
        phoneError.style.display = 'block';
    } else {
        // Hide the error message
        phoneError.style.display = 'none';

        // You can proceed with form submission or additional validation here
        // For example: this.submit();
    }



    return errorFlag;
}

/*
 * Resets (hides) all of the error messages on the page.
 */
function hideAllErrors() {
    // Get all the errors
    let errors = document.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }

    // Hide reCAPTCHA error
    let captchaError = document.getElementById("captcha_error");
    captchaError.style.display = "none";
}


/**
 * Handles the load event of the document.
 */
function load() {
    // Add event listener for the form submit
    document.getElementById("contact_form").addEventListener("submit", validate);

    // Reset the form using the default browser reset
    // This is done to ensure the radio buttons are unchecked when the page is refreshed
    // This line of code must be done before attaching the event listener for the customer reset
    document.getElementById("contact_form").reset();

    // Add event listener for our custom form submit function
    document.getElementById("contact_form").addEventListener("reset", resetForm);

    hideAllErrors();

}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// Add the event listener for the document load
document.addEventListener("DOMContentLoaded", load);
