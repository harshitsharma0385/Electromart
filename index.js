// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get modal and buttons
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    // Show the modal after 3 seconds
    setTimeout(() => {
        modal.style.display = 'block';
    }, 3000); // 3000ms = 3 seconds

    // Close the modal when the user clicks on the close button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Handle login button click (you can add redirection or logic here)
    loginBtn.onclick = function() {
        alert('Redirecting to login...');
        modal.style.display = 'none';
        // You can redirect to a login page like:
        // window.location.href = '/login';
    };

    // Handle signup button click (you can add redirection or logic here)
    signupBtn.onclick = function() {
        alert('Redirecting to sign up...');
        modal.style.display = 'none';
        // You can redirect to a signup page like:
        // window.location.href = '/signup';
    };
});