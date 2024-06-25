document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signInEmailInput = document.getElementById('signInEmail');
    const errorText = document.getElementById('errorText'); // Add this line

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
            errorText.style.display = 'none'; // Hide error message if "@" is present
        } else {
            loginButton.classList.add('disabled');
            loginButton.removeAttribute('href');
            errorText.style.display = 'block'; // Show error message if "@" is not present
        }
    });
});