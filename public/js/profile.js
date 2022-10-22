let deleteBtn = document.querySelectorAll('.delete-post');
const postEl = document.querySelectorAll('.update-post');
const updateTitleBtn = document.querySelectorAll('.update-title');
const updateContentBtn = document.querySelectorAll('.update-post');

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-content').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        window.alert("Success!!");
        document.location.replace('/');
      } else {
        alert('Failed to create blog post');
      }
    }
};

document.querySelector('.new-blog-post').addEventListener('submit', newFormHandler);  
  

  const deleteBlogPost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`api/blog/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        window.alert("Post deleted successfully!")
        document.location.reload('/profile');
      } else {
        alert('Failed to delete post. Please try again.')
      }
    }
};

for (let index = 0; index < deleteBtn.length; index++) {
  deleteBtn[index].addEventListener('click', deleteBlogPost)

};
 
const updateBlogTitle = async (event) => {
  const id = event.target.getAttribute('data-id')
  const title = window.prompt("Enter the updated title:").trim();

    if (title && id) {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title }),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        window.alert("Title updated!")
        document.location.reload('/profile');
      } else {
        alert(response.statusText);
      }
    }
};

for (let index = 0; index < updateTitleBtn.length; index++) {
  updateTitleBtn[index].addEventListener('click', updateBlogTitle)

};

const updateBlogContent = async (event) => {
  const id = event.target.getAttribute('data-id')
  const description = window.prompt("Enter the updated post content").trim();

    if (description && id) {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ description }),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        window.alert("Content updated!")
        document.location.reload('/profile');
      } else {
        alert(response.statusText);
      }
    }
};

for (let index = 0; index < updateContentBtn.length; index++) {
  updateContentBtn[index].addEventListener('click', updateBlogContent)

};
