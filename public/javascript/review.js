async function reviewFormHandler(event) {
    event.preventDefault();
  
    const review_description = document.querySelector('textarea[name="review-body"]').value.trim();
    const restaurant_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (review_description) {

      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
          restaurant_id,
          review_description
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
  
  document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);
  