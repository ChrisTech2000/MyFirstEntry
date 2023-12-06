function handleSubmit(event) {
    event.preventDefault();

    // Form validation (you can add more checks as needed)
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate successful sign-up
    alert('Sign-up successful! Redirecting to the landing page.');
    
    // Redirect to the landing page (replace 'landing.html' with your actual landing page)
    window.location.href = './login.html';
}
