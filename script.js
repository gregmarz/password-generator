// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var charLOW = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charUP = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","|","~"];
var numChar = ["1","2","3","4","5","6","7","8","9","0"];
var userChar = [];


function generatePassword() {
  //check user pass length
  var passLength = prompt("How many characters");
  if (passLength <= 7) {
    alert("Password must be atleast 8 characters");
    return (generatePassword);
  } else if (passLength >= 129) {
    alert("please choose a password that has less than 128 characters");
    return (generatePassword);
  }
  //see if user wants lowercase
  var passLower = confirm("do you want lowercase in the password?")
    if (passLower) {
      alert("you will have lowercase");
      } else {
        alert("you will not have lowercase");
      }
    //see if user wants uppercase
      var passUpper = confirm("do you want uppercase in the password");
      if (passUpper) {
        alert("you will have uppercase");
      } else {
        alert("you will not have uppercase");
      }
    //see if user wants special characters
    var passSpecial = confirm("do you want special characters in the password");
    if (passSpecial) {
      alert("You will have special characters");
    } else {
      alert("you will not have special characters");
    }
    //see if user want numbers in password
    var passNum = confirm("do you want numbers in your password");
    if (passNum) {
      alert("you will have numbers");
    } else {
      alert("you will not have numbers");
    }
    //break out if no char type
    if (passLower === false && passLower === false && passUpper === false && passSpecial === false) {
      alert("you need atleast one char type");
      return(generatePassword);
    }
    //CONCAT THE CHAR TYPES TO THE PASSWORD
    if (passLower = true) {
      userChar = userChar.concat(charLOW);
    }

    if (passUpper = true) {
      userChar = userChar.concat(charUP);
    }

    if (passSpecial = true) {
      userChar = userChar.concat(specChar);
    }

    if (passNum = true) {
      userChar = userChar.concat(numChar);
    }

    //pass generator
    var donePass = "";
    for (let i = 0; i <passLength; i++) {
      var gen = Math.floor(Math.random() * userChar.length);
      donePass = donePass + userChar[gen];
    }
    return donePass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
