const passwordBox = document.getElementById("Password");
const length = 12; // Corrected typo

const upperCase = "ABCD";
const lowerCase = "abcd";
const number = "1234";
const symbol = "@#$%&*{}[]<>/=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Assign the generated password to the input box
    passwordBox.value = password;
}
