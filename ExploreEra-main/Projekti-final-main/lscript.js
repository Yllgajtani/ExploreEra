document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signInEmailInput = document.getElementById('signInEmail');
    const errorText = document.getElementById('errorText');
    const logInButton = document.getElementById('logInButton');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    signInEmailInput.addEventListener('input', function() {
        const email = signInEmailInput.value.trim();
        const loginButton = document.querySelector('.form-container.sign-in-container .button');

        if (email.includes('@')) {
            loginButton.classList.remove('disabled');
            loginButton.setAttribute('href', './index2.html');
            errorText.style.display = 'none';
        } else {
            loginButton.classList.add('disabled');
            loginButton.removeAttribute('href');
            errorText.style.display = 'block';
        }
    });

    logInButton.addEventListener('click', function(event) {
        const email = signInEmailInput.value.trim();

        if (!email.includes('@')) {
            event.preventDefault(); // Prevent default action if email is not valid
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid email before logging in.',
            });
        } else {
            // If email is valid, show success message and redirect after a brief delay
            Swal.fire({
                icon: 'success',
                title: 'Logged In!',
                text: 'Redirecting you...',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading(); // Show loading animation while timer runs
                },
                willClose: () => {
                    window.location.href = logInButton.getAttribute('href');
                }
            });
        }
    });
});
