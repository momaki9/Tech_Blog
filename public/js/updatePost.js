const updateBlogPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('').value.trim();
    const description = document.querySelector('').value.trim();
    const id = window.location.pathname.replace("/blog/", "");
  
    if (title && description && id) {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload('/profile');
      } else {
        alert(response.statusText);
      }
    }
};

document.querySelector('').addEventListener('submit', updateBlogPost);