
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
    window.alert("getting somewhere")
    const content = document.querySelector('.comment-content').value.trim();

    if (content) {
        const response =await fetch(`/api/blog`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'content-Type': 'application/json', },
        });
        if (response.ok) {
            window.alert("Comment added!");
        } else {
            alert('Something went wrong! Please try again!')
        }
    }
};

reply.addEventListener('click', newCommentSection)

submit.addEventListener('click', newComment)