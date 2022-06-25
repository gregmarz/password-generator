// Assignment Code
var generateBtn = document.querySelector("#generate");

var charUP = "abcdefghijklmnopqrstuvwxyz";
var charLOW = "ABCDEFGHIJKLMNOPQRSTUV";
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numChar = "1234567890";



function generatePassword() {
  
  var passLength = prompt("How many characters");
  if (passLength <= 7) {
    alert("Password must be atleast 8 characters");
  } else if (passLength >= 129) {
    alert("please choose a password that has less than 128 characters");
  }

  var passLower = confirm("do you want lowercase in the password?")
    if (passLower = true) {
      alert("you will have lowercase");
      } else {
        alert("you will not have lowercase");
      }
    
      var passUpper = confirm("do you want uppercase in the password");
      if (passUpper = true) {
        alert("you will have uppercase");
      } else {
        alert("you will not have uppercase");
      }
    
    var passSpecial = confirm("do you want special characters in the password");
    if (passSpecial = true) {
      alert("You will have special characters");
    } else {
      alert("you will not have special characters");
    }
    
    var passNum = confirm("do you want numbers in your password");
    if (passNum = true) {
      alert("you will have numbers");
    } else {
      alert("you will not have numbers");
    }
    return
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
