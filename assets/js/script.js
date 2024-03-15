$(document).ready(function() {
    // Login form submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        // Your login form submission logic here
    });

    // Sign up form submission
    $('#signupForm').submit(function(event) {
        event.preventDefault();
        // Your sign up form submission logic here
        // Retrieve form data
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#signupEmail').val();
        var password = $('#signupPassword').val();
        var confirmPassword = $('#confirmPassword').val();

        // Display signed up data in modal
        $('#modalFirstName').text(firstName);
        $('#modalLastName').text(lastName);
        $('#modalEmail').text(email);
        $('#modalPassword').text(password);
        $('#thankYouModal').modal('show');
    });
});
