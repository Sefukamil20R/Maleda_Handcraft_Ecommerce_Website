
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value.trim();
  const password = document.querySelector('input[type="password"]').value.trim();


  const storedUserData = localStorage.getItem('userData');
  if (!storedUserData) {
    alert('No user data found. Please sign up first.');
    return;
  }

  const userDataArray = JSON.parse(storedUserData);

  
  const user = userDataArray.find(user => user.email === email && user.password === password);

  if (user) {
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

