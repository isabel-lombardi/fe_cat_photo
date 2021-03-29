import './styles.scss';
// import {registration} from './registration.js';

// Login JS

/* The function below activates a toggle for the input field to use for password recovery (you insert there your e-mail and recover your password)
  By clicking on the link, the field is shown or hidden */

function toggleInputField() {
  var input = document.querySelector('.login-section__psw-recovery-field');
  input.classList.toggle('login-section__psw-recovery--display-block');
}

var link = document.querySelector('.login-section__psw-recovery-link');

link.addEventListener('click', toggleInputField);

/* const newUserName = JSON.parse(registrationResponse.username);
const newUserPassword = JSON.parse(registrationResponse.password);

console.log(newUserName);
console.log(newUserPassword); */

const loginForm = document.querySelector('#index-main__login__form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email'); 

/* username.value = newUserName;
password.value = newUserPassword; */

// Event Listener for Login function
loginForm.addEventListener('submit', (e) => {
  // e.preventDefault();
  checkLength(username, 3, 12);
  isValidEmail(email);
  checkPasswordStrength(password);
  fetch('https://cat-photo.herokuapp.com/login/', {
    method: 'post',  
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'TOKEN' // Not sure about this line 29/3/2021
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })
    .then((loginResponseFromBackend) => {
      return loginResponseFromBackend.json();
    })
    .then((loginResponseForToken) => {
      console.log(loginResponseForToken);
      return localStorage.setItem('token', loginResponseForToken.token);
    })
    .then((loginResponseForRedirect) => {
      console.log(loginResponseForRedirect);
      window.location = 'https://cat-photo.netlify.app/landing_page.html';
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
});
