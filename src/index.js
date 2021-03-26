import './styles.scss';

// Login JS

/* The function below activates a toggle for the input field to use for password recovery (you insert there your e-mail and recover your password)
  By clicking on the link, the field is shown or hidden */

function toggleInputField() {
  var input = document.querySelector('.login-section__psw-recovery-field');
  input.classList.toggle('login-section__psw-recovery--display-block');
}

var link = document.querySelector('.login-section__psw-recovery-link');

link.addEventListener('click', toggleInputField);

// Show error message functionality
const form = document.querySelector('#index-main__login__form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');

// Event listeners
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
// });

// =================== #18 form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  /* checkLength(username, 3, 12);
  isValidEmail(email);
  checkPasswordStrength(password); */
  const formData = new FormData(this);
  fetch('https://cat-photo.herokuapp.com/login' /*will be changed with correct URL tomorrow*/, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
});
