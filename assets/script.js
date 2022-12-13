// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Please choose a password length of at least 8 characters and no more than 128 characters");
 
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("ERROR: Please choose a value between 8 and 128");
  }

  let lower = confirm("Do you want it to include lowercase characters?");
  let upper = confirm("Do you want it to include uppercase characters?");
  let numeric = confirm("Do you want it to include numeric characters?");
  let special = confirm("Do you want it to include special characters?");
  let password = generatePassword(passwordLength, lower, upper, numeric, special);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandom(str) {
  let rand = Math.floor(Math.random() * str.length);
  return str.substring(rand, rand + 1);
}

function generatePassword(passwordLength, lower, upper, numeric, special) {
  let characters = "";
  let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowers = "abcdefghijklmnopqrstuvwxyz";
  let numerics = "0123456789";
  let specials = "!@#$%^&*()";
  let password = "";

  if (upper) {
    characters += uppers;
    password += getRandom(uppers);
    passwordLength--;
  }

  if (lower) {
    characters += lowers;
    password += getRandom(lowers);
    passwordLength--;
  }

  if (numeric) {
    characters += numerics;
    password += getRandom(numerics);
    passwordLength--;
  }

  if (special) {
    characters += specials;
    password += getRandom(specials);
    passwordLength--;
  }

  if (!characters.length) alert ("ERROR: Please select at least one character type. Click Generate Password button to try again");

  for (let i = 0; i < passwordLength; i++) {
    password += getRandom(characters);
   }

  return password.shuffle();
}

// Source https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
