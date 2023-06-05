const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const country = document.getElementById("country");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstname_err = document.getElementById("firstname_err");
const lastname_err = document.getElementById("lastname_err");
const country_err = document.getElementById("country_err");
const email_err = document.getElementById("email_err");
const password_err = document.getElementById("password_err");

const elements = [
  { element: firstname, err: firstname_err },
  { element: lastname, err: lastname_err },
  { element: country, err: country_err },
  { element: email, err: email_err },
  { element: password, err: password_err },
];

for (let i = 0; i < elements.length; i++) {
  const content = elements[i];
  content.element.addEventListener("input", () => {
    content.err.innerHTML = "";
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("Form validated successfully. welldone!!!!!");
    resetForm();
  }
});

function validateForm() {
  const firstnameValidate = validateString(
    firstname,
    firstname_err,
    "Firstname"
  );
  const lastnameValidate = validateString(lastname, lastname_err, "Lastname");
  const countryValidate = validateString(country, country_err, "Location");
  const emailValidate = validateEmail(email, email_err, "Email");
  const passwordValidate = validatePassword(password, password_err, "Password");
  if (
    firstnameValidate &&
    lastnameValidate &&
    countryValidate &&
    emailValidate &&
    passwordValidate
  ) {
    return true;
  } else {
    return false;
  }
}

function validateString(element, errElement, fieldname) {
  if (element.value !== "") {
    return true;
  } else {
    errElement.innerHTML = `${fieldname} is required`;
    return false;
  }
}

function validateEmail(element, errElement, fieldname) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (element.value === "") {
    errElement.innerHTML = `${fieldname} is required`;
    return false;
  } else if (!element.value.match(validRegex)) {
    errElement.innerHTML = `${fieldname} provided is invalid`;
    return false;
  } else {
    return true;
  }
}

function validatePassword(element, errElement, fieldname) {
  if (password.value === "") {
    errElement.innerHTML = `${fieldname} is required and should be greater then 8`;
    return false;
  } else if (element.value.length < 8) {
    errElement.innerHTML = `${fieldname} should be greater then 8`;
    return false;
  } else {
    return true;
  }
}
function resetForm() {
  firstname.value = "";
  lastname.value = "";
  country.value = "";
  email.value = "";
  password.value = "";
}
