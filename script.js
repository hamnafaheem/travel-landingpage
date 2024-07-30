<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup-message');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Show the popup message
      popup.classList.remove('hidden');
      popup.classList.add('show');

      // Hide the popup message after 3 seconds
      setTimeout(() => {
        popup.classList.remove('show');
        popup.classList.add('hidden');
      }, 3000);
    });
  });
</script>
