// Assignment code
var generateBtn = document.querySelector("#generate");

const passKeys = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  symbol: '!@#$%&*()<>{}[]'
};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // Prompt for password length
  var lengthConfirm = window.prompt("How many characters should your password include? Please enter a number between 8 and 128. Okay to continue.");

  // Confirm all types of char
  if (lengthConfirm >= 8 && lengthConfirm <= 128) {
    var upperConfirm = window.confirm("Include uppercase letters? Cancel to continue without uppercase.");
    var lowerConfirm = window.confirm("Include lowercase letters? Cancel to continue without lowercase.");
    var numberConfirm = window.confirm("Include numbers? Cancel to continue without numbers.");
    var symbolConfirm = window.confirm("Include special characters? Cancel to continue without special characters.");
  }else { 
    alert("Password must be 8-128 characters long. Please try again.")
  }

  
  var chosenValues = "";

  if (upperConfirm) {
    chosenValues += passKeys.uppercase
  }
  if (lowerConfirm) {
    chosenValues += passKeys.lowercase
  }
  if (numberConfirm) {
    chosenValues += passKeys.number
  }
  if (symbolConfirm) {
    chosenValues += passKeys.symbol
  }
  if (upperConfirm != true && lowerConfirm != true &&
    numberConfirm != true && symbolConfirm != true) {
      alert("Select any password option and specify the length"); 
  } 
console.log(chosenValues)

 // Random generator function
 var generatedPassword = "";

 for (var i = 0; i < lengthConfirm; i++) {
   generatedPassword += chosenValues[Math.floor(Math.random() * chosenValues.length -1)];
  
 } 
 console.log(generatedPassword)
return generatedPassword;
}
generateBtn.addEventListener("click", writePassword);