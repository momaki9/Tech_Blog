// script to be run to allow users with accounts to log into the app
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#user-login-email').value.trim();
    const password = document.querySelector('#user-login-password').value.trim();
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/bloggers/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
};

document.querySelector('.login-page').addEventListener('submit', loginFormHandler);