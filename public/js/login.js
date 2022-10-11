const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#user-login-email').value.trim();
    const password = document.querySelector('#user-login-password').value.trim();

    console.log(`email=${email}; passowrd = ${password}`)
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/bloggers/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
        console.log("it worked?")
      } else {
        alert(response.statusText);
        console.log("didn't work")
      }
    }
};

document.querySelector('.login-page').addEventListener('submit', loginFormHandler);