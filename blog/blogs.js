document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    // Create new blog element
    var blogElement = document.createElement('div');
    blogElement.classList.add('blog');

    // Create and append title element
    var titleElement = document.createElement('h2');
    titleElement.textContent = title;
    blogElement.appendChild(titleElement);

    // Create and append content element
    var contentElement = document.createElement('p');
    contentElement.textContent = content;
    blogElement.appendChild(contentElement);

    // Append blog element to container
    var blogContainer = document.getElementById('blogContainer');
    blogContainer.appendChild(blogElement);

    // Reset form fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    // Optionally, you can display a success message or scroll to the newly added blog
    alert('Blog published successfully!');
});
