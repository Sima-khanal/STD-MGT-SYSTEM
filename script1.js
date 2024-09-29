// Toggle between login and signup forms
document.getElementById('signup-link').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
});

// Password validation and localStorage implementation
document.querySelector('#signup-form form').addEventListener('submit', function (e) {
  var password = document.getElementById('password-signup').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var username = document.getElementById('email').value; // Assuming username is the email
  var errorMessage = document.getElementById('error-message');

  if (password !== confirmPassword) {
      e.preventDefault(); // Prevent form submission
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Passwords do not match. Please try again.';
  } else {
      errorMessage.style.display = 'none';
      // Store credentials (for demo purposes only)
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Redirect to home page
      window.location.href = 'dashboard.html';
  }
});