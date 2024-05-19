
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const username = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (email === '' || password === '' || username === '' || phone === '') {
      alert('Please fill in all fields.');
      return;
    }


    const storedUserData = localStorage.getItem('userData');
    let userDataArray = [];
    if (storedUserData) {
      userDataArray = JSON.parse(storedUserData);
      const existingUser = userDataArray.find(user => user.username === username);
      if (existingUser) {
        alert('Username already exists. Please choose a different one.');
        return; 
      }
    }

    const newUser = {
      email: email,
      password: password,
      username: username,
      phone: phone
    };

   
    userDataArray.push(newUser);

    localStorage.setItem('userData', JSON.stringify(userDataArray));

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phone').value = '';

    alert('User data saved successfully!');
    window.location.href = 'login.html';
  });
