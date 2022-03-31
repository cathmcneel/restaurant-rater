async function editFormHandler(event) {
    event.preventDefault();
  
    const review_description = document.querySelector('input[name="review"]').value.trim();

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        review_description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);