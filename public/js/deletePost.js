const deleteBlogPost = async (event) => {
    event.preventDefault();

    const id = window.location.pathname.replace("/blog/", "");
  
    if (id) {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ post_id: id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload('/profile');
      } else {
        alert(response.statusText);
      }
    }
};

document.querySelector('').addEventListener('submit', deleteBlogPost);