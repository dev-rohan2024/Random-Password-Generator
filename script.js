// select the necessary Random Password Generator app element
let passwordBox = document.querySelector(".password-box input");
let rangeSlider = document.querySelector(".range-box input");
let sliderValue = document.querySelector(".range-box span");
let copyBtn = document.getElementById("copy-btn");
let generatePasswordBtn = document.querySelector(".generate-button button");
//Characters of alphabet(a-z/A-Z), numbers(0-9) and Symbols($%&[]...)
let allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";
// generate random password
let generatePassword = () => {
  let newPassword = "";
  // looped through the rangeSlider value
  for (let i = 0; i < rangeSlider.value; i++) {
    let randomPassword = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomPassword];
  }
  passwordBox.value = newPassword;
};
generatePassword();

let password = rangeSlider.addEventListener("input", () => {
  // here is checked if the value of rangeSlider is less then 10 the 0 will be added before it
  sliderValue.innerText =
    rangeSlider.value < 10 ? `0${rangeSlider.value}` : rangeSlider.value;

  generatePassword();
});
// copy generate password
let copyPassword = () => {
  navigator.clipboard.writeText(passwordBox.value);
  copyBtn.innerHTML = `<span class="material-symbols-outlined">check_circle</span>`;
  setTimeout(() => {
    copyBtn.innerHTML = ` <span id="copy-btn" class="material-symbols-outlined">content_copy</span>`;
  }, 600);
};
// eventlistener
copyBtn.addEventListener("click", copyPassword);
generatePasswordBtn.addEventListener("click", generatePassword);
