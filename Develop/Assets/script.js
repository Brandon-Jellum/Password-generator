
document.querySelector("#generate")

.addEventListener("click", writePassword);

// Number, Letter, special charactor array

var number = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lowerCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var specialChar = ("!", "@", "#", "$", "%", "^", "&", "*", "?", "/");

var confirmLength = "";
var confirmLowerCase
var confirmUpperCase
var confirmNumericChar
var confirmSpecialChar

// prompt to confirm number of characters
function generatePassword() {
  var confirmLength =(prompt("How many characters will your password contain?"));

  if (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password must be between 8-128 charaters long")
  }

// confirm password specifications
  var confirmLowerCase = confirm("Click OK, to confirm if you would like to include Lowercase characters");

  var confirmUpperCase = confirm("Click OK, to confirm if you would like to include Uppercase characters");

  var confirmSpecialChar = confirm("Click OK, to confirm if you would like to include Special characters");

  var confirmNumericChar = confirm("Click OK, to confirm if you would like to include Numeric characters");
 
 if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false && confirmNumericChar === false) {

// Alert if minimun is not met
    alert("You must choose a minimum of one parameter");

// loop back to confirm password specifications
   var confirmLowerCase = confirm("Click OK, to confirm if you would like to include Lowercase characters");

   var confirmUpperCase = confirm("Click OK, to confirm if you would like to include Uppercase characters");

   var confirmSpecialChar = confirm("Click OK, to confirm if you would like to include Special characters");

   var confirmNumericChar = confirm("Click OK, to confirm if you would like to include Numeric characters");
  }



  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



