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
const passwordError = document.querySelector('#passwordInput + span.passError');
const passwordConfirmError = document.querySelector('#passwordConfirmInput + span.error');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const passLength = document.getElementById('passLength');

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
const checkPassValid = function checkPassValid() {
  if (passwordInput.validity.valid) {
    letter.className = 'passValid';
    capital.className = 'passValid';
    number.className = 'passValid';
    passLength.className = 'passValid';
  } else { 
    showPassError();
  }
};

const showPassError = function showPassError() {
  var lowerCaseLetters = /[a-z]/g;
  if (passwordInput.value.match(lowerCaseLetters)){
    letter.className = 'passValid';
  } else {
    letter.className = 'passInvalid';
  }

  var upperCaseLetters = /[A-Z]/g;
  if(passwordInput.value.match(upperCaseLetters)) {
    capital.className = 'passValid';
  } else { 
    capital.className = 'passInvalid';
  }

  var numbers = /[0-9]/g;
  if (passwordInput.value.match(numbers)) {
    number.className = 'passValid';
  } else {
    number.className = 'passInvalid';
  }

  if(passwordInput.value.length >= 8) {
    passLength.className = 'passValid';
  } else {
    passLength.className = 'passInvalid' ;
  }

  passwordError.className = 'passError passActive';
}

// function for pass Confirmation
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

};

//listen for input on all inputs
emailInput.addEventListener('focusout', () => {
  checkEmailValid();
  emailInput.addEventListener('input', checkEmailValid);
});

zipInput.addEventListener('focusout', () => {
  checkZipValid();
  zipInput.addEventListener('input', checkZipValid)
});

passwordInput.addEventListener('focusout', () => {
  checkPassValid();
  passwordInput.addEventListener('input', checkPassValid);
});

passwordConfirmInput.addEventListener('focusout', () => {
  checkPassConValid();
  passwordConfirmInput.addEventListener('input', checkPassConValid)
});

//run check valid on submit 

form.addEventListener('submit', function (event) {
  if (!emailInput.validity.valid) {
    showEmailError();
    event.preventDefault();
    emailInput.focus();
    return;
  }
  if (!zipInput.validity.valid) {
    showZipError();
    event.preventDefault();
    zipInput.focus();
    return;
  }
  if (!passwordInput.validity.valid) {
    showPassError();
    event.preventDefault();
    return;
  }
  if (passwordConfirmInput.value !== passwordInput.value){
    showPassConfError();
    event.preventDefault();
    passwordConfirmInput.focus();
    return;
  }
  event.preventDefault();
  alert("high Five!!");
});