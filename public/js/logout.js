const logout = async () => {
    const response = await fetch('/api/bloggers/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
      console.log("success")
      // console.log(response)
    } else {
      alert(response.statusText);
      console.log("failed")
      // console.log(response)
    }
  };
  
  document.querySelector('#logout-btn').addEventListener('click', logout);
  