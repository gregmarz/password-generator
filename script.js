// Assignment Code
var generateBtn = document.querySelector("#generate");

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV" 
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword() {
  var passLength = prompt("How many characters");
  if (passLength <= 7) {
    alert("Password must be atleast 8 characters");
  } else if (passLength >= 129) {
    alert("please choose a password that has less than 128 characters");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
