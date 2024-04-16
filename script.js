// Form Validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        // Assuming AJAX submission here or other action
        alert('Message sent successfully!');
        form.reset();
    }
});
