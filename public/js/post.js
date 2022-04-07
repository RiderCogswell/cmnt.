const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('textarea[name="topic-body"]').value.trim();
  const user_id = document.querySelector('#user_id').value.trim();

  if (title) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, user_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create new post.');
    }
  }
};

document
  .querySelector('.topic-form')
  .addEventListener('submit', postFormHandler);
