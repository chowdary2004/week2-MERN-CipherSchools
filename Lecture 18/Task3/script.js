const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-button");
const successMessage = document.getElementById("success-message");
const logoutButton = document.getElementById("logout-button");

function isInputEmpty() {
  const inputs = [usernameInput, passwordInput, confirmPasswordInput];
  for (const input of inputs) {
    if (input.value.trim() === "") {
      return true;
    }
  }
  return false;
}

function isValidPasswordLength() {
  return passwordInput.value.length >= 8;
}

function passwordsMatch() {
  return passwordInput.value === confirmPasswordInput.value;
}

function validateUserInput() {
  let isValid = true;

  if (isInputEmpty()) {
    alert("Please fill in all fields!");
    isValid = false;
  } else if (!isValidPasswordLength()) {
    passwordInput.classList.add("wrong-input"); 
    alert("Password must be at least 8 characters long!");
    isValid = false;
  } else if (!passwordsMatch()) {
    passwordInput.classList.add("wrong-input");
    confirmPasswordInput.classList.add("wrong-input");
    alert("Passwords don't match!");
    isValid = false;
  }

  passwordInput.classList.remove("wrong-input"); 
  confirmPasswordInput.classList.remove("wrong-input");

  return isValid;
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); 

  if (validateUserInput()) {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    successMessage.textContent = `Successfully Logged In: Username: ${username}, Password: ${password}`;
    successMessage.style.display = "block";
    submitButton.style.display = "none"; 
    logoutButton.style.display = "block"; 
  }
});

logoutButton.addEventListener("click", function () {
  successMessage.style.display = "none";
  submitButton.style.display = "block";
  logoutButton.style.display = "none";
  usernameInput.value = ""; 
  passwordInput.value = "";
  confirmPasswordInput.value = "";
});
