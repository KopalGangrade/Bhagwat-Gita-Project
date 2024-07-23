document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Example: Send form data to server or perform any action
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Optionally, display a success message or redirect to a thank you page
    alert('Message sent successfully!');
});
