var prompt = require('prompt');
var validator = require('validator');
//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //

  if(err) {
    console.log(err);
    err;
  }

  let email = result.email;
  if(validator.isEmail(email)) {
    console.log('email is valid')
  } else {
    console('email is not valid')
  }


  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});