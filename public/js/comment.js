
const reply = document.querySelector('.add-reply');
const comment = document.querySelector('#comment-section');
const submit = document.querySelector('.add-new-comment');


const newCommentSection = (event) => {
    event.preventDefault();

    const newEl = document.createElement("textarea");
    newEl.setAttribute("class", "comment-content");
    submit.removeAttribute("class", "hidden")
    submit.textContent = "Add Reply";
    comment.appendChild(newEl);
};



const newComment = async (event) => {
    event.preventDefault();
    const content = document.querySelector('.comment-content').value.trim();
    const post_id = window.location.pathname.replace("/blog/", "");
    // console.log(content)
    // console.log(post_id)
    if (content && post_id) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: { 'content-Type': 'application/json', },
        });
        if (response.ok) {
            window.alert("Comment added!");
            // document.location.reload('/')
        } else {
            alert('Something went wrong! Please try again!')
        }
    }
};

reply.addEventListener('click', newCommentSection)

submit.addEventListener('click', newComment)