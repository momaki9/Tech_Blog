// script to be run to allow the user to log out of the app
const logout = async () => {
  const response = await fetch('/api/bloggers/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout-btn').addEventListener('click', logout);
