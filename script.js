var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "\"", ",", "~"];
var characters = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  characters =[];
  var length = parseInt(prompt("How many characters long do you want your password?"));
  if (isNaN(length)) {
    alert("Must be a number");
    return;
  }
  if (length < 8 || length > 128) {
    alert("Length must be between 8-128");
    return;
  }
  var incLower = confirm("Do you want to include lower case letters?");
  if (incLower) {
    characters.push(lowerCase);
  }
  var incUpper = confirm("Do you want to include upper case letters?");
  if (incUpper) {
    characters.push(upperCase);
  }
  var incNumbers = confirm("Do you want to include numbers?");
  if (incNumbers) {
    characters.push(numbers);
  }
  var incSpecial = confirm("Do you want to include special characters?");
  if (incSpecial) {
    characters.push(specialChar);
  }
  if (!incLower && !incUpper && !incSpecial) {
    alert("At least one character type must be selected.")
  }

  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(a) {
  var password = "";
  for (var i = 0; i < a; i++) {
    if (i < characters.length) {
      var neededChar = Math.floor(Math.random() * characters[i].length);
      password += characters[i][neededChar];
    }
    else {
      var randomCharType = Math.floor(Math.random() * characters.length);
      var randomChar = Math.floor(Math.random() * characters[randomCharType].length);
      password += characters[randomCharType][randomChar];
    }
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

