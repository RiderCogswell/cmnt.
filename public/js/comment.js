async function commentFormHandler(event) {
  event.preventDefault();
  console.log('here');

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const topic_id = document.querySelector('#topic_id').value.trim();
  const user_id = document.querySelector('#user_id').value.trim();

  console.log(user_id);
  console.log(topic_id);
  console.log(comment_text);
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment_text,
        user_id,
        topic_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);