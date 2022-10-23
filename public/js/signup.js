// script to be run on client side to all for new users to sign up
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('.user-signup-name').value.trim();
    const email = document.querySelector('.user-signup-email').value.trim();
    const password = document.querySelector('.user-signup-password').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/bloggers', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
};

document.querySelector('.signup-page').addEventListener('submit', signupFormHandler);