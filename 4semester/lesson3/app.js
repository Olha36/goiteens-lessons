var validator = require('validator');
var prompt = require('prompt');

prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['email'], (err, result) => {

  if(err) {
    console.log(err);
    return;
  }
 
  let email = result.email;

  if(validator.isEmail(email)) {
    console.log('email is valid');
  } else {
    console.log('email is not valid');
  }
});

// const validateEmail = email => {
//   return validator.isEmail(email);
// }

// console.log("Is mango@mail.com a valid email?:",
// validateEmail('mango@mail.com')
// );

// console.log("Is mangomail.com a valid email?:",
// validateEmail('mangomail.com')
// );



// console.log('hello');

