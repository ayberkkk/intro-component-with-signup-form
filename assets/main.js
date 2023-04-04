const form = document.getElementById("form");
const firstName = document.getElementById("userName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const inputs = document.querySelectorAll("input");

function submitFunc() {
  alert("Form submitted successfully!");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var fname = firstName.value.trim();
  var lname = lastName.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  let isValid = true;
  if (fname === "") {
    errorFunc(firstName, "First name is required");
    isValid = false;
  } else {
    successFunc(firstName);
  }
  if (lname === "") {
    errorFunc(lastName, "Last name is required");
    isValid = false;
  } else {
    successFunc(lastName);
  }
  if (emailValue === "") {
    errorFunc(email, "Email is required");
    isValid = false;
  } else {
    successFunc(email);
  }
  if (passwordValue === "") {
    errorFunc(password, "Password is required");
    isValid = false;
  } else {
    successFunc(password);
  }

  if (isValid) {
    submitFunc();   
  }
});

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.remove("err", "success");
    const formControl = input.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = "";
  });
});

function errorFunc(req) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  req.classList.add("err");
  span.classList.add("err-text");
  req.value = "";
}

function successFunc(req) {
  req.classList.remove("err");
  req.classList.add("success");
}
