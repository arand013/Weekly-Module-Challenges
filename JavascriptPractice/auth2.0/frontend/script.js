const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

// Login form
loginForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Get the email and password from the form.
  const email = loginForm.querySelector('input[name="email"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;

  // Send a POST request to the server with the email and password.
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  // Check the response status code.
  if (response.status === 200) {
    // The login was successful.
    // Redirect the user to the protected page.
    window.location.href = '/protected-page';
  } else {
    // The login failed.
    // Display an error message to the user.
  }
});

// Sign up form
signupForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Get the name, email, and password from the form.
  const name = signupForm.querySelector('input[name="name"]').value;
  const email = signupForm.querySelector('input[name="email"]').value;
  const password = signupForm.querySelector('input[name="password"]').value;

  // Send a POST request to the server with the name, email, and password.
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  // Check the response status code.
  if (response.status === 200) {
    // The sign up was successful.
    // Redirect the user to the login page.
    window.location.href = '/login';
  } else {
    // The sign up failed.
    // Display an error message to the user.
  }
});
