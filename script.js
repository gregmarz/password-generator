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
    return (generatePassword);
  } else if (passLength >= 129) {
    alert("please choose a password that has less than 128 characters");
    return (generatePassword);
  }

  var passLower = confirm("do you want lowercase in the password?")
    if (passLower) {
      alert("you will have lowercase");
      } else {
        alert("you will not have lowercase");
      }
    
      var passUpper = confirm("do you want uppercase in the password");
      if (passUpper) {
        alert("you will have uppercase");
      } else {
        alert("you will not have uppercase");
      }
    
    var passSpecial = confirm("do you want special characters in the password");
    if (passSpecial) {
      alert("You will have special characters");
    } else {
      alert("you will not have special characters");
    }
    
    var passNum = confirm("do you want numbers in your password");
    if (passNum) {
      alert("you will have numbers");
    } else {
      alert("you will not have numbers");
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
