// select form
const form = document.getElementById('testForm');
//select all inputs
const emailInput = document.getElementById('emailInput');
const zipInput = document.getElementById('zipInput');
const passwordInput = document.getElementById('passwordInput');
const passwordConfirmInput = document.getElementById('passwordConfirmInput');
//select all error spans
const emailError = document.querySelector('#emailInput + span.error');
const zipError = document.querySelector('#zipInput + span.error');
const passwordError = document.querySelector('#passwordInput + span.error');
const passwordConfirmError = document.querySelector('#passwordConfirmInput + span.error');

// function for email verify
const checkEmailValid = function checkEmailValid() {
  if (emailInput.validity.valid) {
    emailError.className = 'error';
    emailError.innerHTML = '';
  } else {
    showEmailError();
  }
};

const showEmailError = function showEmailError() {
  if (emailInput.validity.valueMissing) {
    emailError.innerHTML = 'You need to enter an e-mail address.';
  } else if (emailInput.validity.typeMismatch) {
    emailError.innerHTML = 'Entered value needs to be an e-mail address.';
  } else if(emailInput.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ emailInput.minLength } characters; you entered ${ emailInput.value.length }.`;
  }
  emailError.className = 'error active';
};
// function for zip
  // check not empty 
  //check for 5 numbers
  // check for real zip?
const checkZipValid = function checkZipValid() {
  if (zipInput.validity.valid) {
    zipError.className = 'error';
    zipError.innerHTML = '';
  } else {
    showZipError();
  }
};

const showZipError = function showZipError() {
  if (!zipInput.validity.valid) {
    zipError.innerHTML = 'Must be a 5 number Zip Code';
  }
  zipError.className = 'error active';
}

// fucntion for password
  // make sure not empty //
  // not more than 20 characters
  // make sure not less that 6 characters
const checkPassValid = function checkPassValid() {
  console.log(passwordInput.validity.valid);
}
// function for pass Confirmation
  // make sure is exactly the same as password
const checkPassConValid = function checkPassConValid() {
  if (passwordConfirmInput.value === passwordInput.value) {
    passwordConfirmError.innerHTML = '';
    passwordConfirmError.className = 'error';
  } else {
    showPassConfError();
  }
};

const showPassConfError = function showPassConfError() {
  if (passwordConfirmInput.value !== passwordInput.value){
    passwordConfirmError.innerHTML = 'Does not match entered password';
  }
  passwordConfirmError.className = 'error active';
}



//listen for input on all inputs
emailInput.addEventListener('focusout', () => {
  checkEmailValid();
  emailInput.addEventListener('input', checkEmailValid);
});

zipInput.addEventListener('focusout', () => {
  checkZipValid();
  zipInput.addEventListener('input', checkZipValid)
});

passwordInput.addEventListener('input', checkPassValid);

passwordConfirmInput.addEventListener('focusout', () => {
  checkPassConValid();
  passwordConfirmInput.addEventListener('input', checkPassConValid)
});

//run check valid on submit 

form.addEventListener('submit', function (event) {
  if (!emailInput.validity.valid) {
    showEmailError();
    event.preventDefault();
    return;
  }
  if (!zipInput.validity.valid) {
    showZipError();
    event.preventDefault();
    return;
  }
  event.preventDefault();
  alert("high Five!!");
})