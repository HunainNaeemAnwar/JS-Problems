// Problem 1 — Build a Theme Manager
// Problem Statement

// Create a reusable theme manager system.

// Features:

// set current theme
// get current theme
// toggle between:
// light
// dark

// Use:

// class
// Example
// theme.setTheme("dark");

// theme.getTheme();

// theme.toggleTheme();

class Theme {
  #currentTheme;
  constructor(theme = "light") {
    this.#currentTheme = theme.toLowerCase();
  }
  setTheme(state) {
    const newState = state.toLowerCase();
    if (newState === "dark" || newState === "light") {
      this.#currentTheme = newState;
    } else {
      console.warn(`Invalid theme: "${newState}". Defaulting to current theme`);
    }
    return this.#currentTheme;
  }
  getTheme() {
    return this.#currentTheme;
  }
  toggleTheme() {
    this.#currentTheme = this.#currentTheme == "dark" ? "light" : "dark";
    return this.#currentTheme;
  }
}

const theme = new Theme("dark");

// console.log(theme.getTheme());
// console.log(theme.setTheme("light"));
// console.log(theme.getTheme());
// console.log(theme.toggleTheme());
// console.log(theme.toggleTheme());
// console.log(theme.toggleTheme());
// console.log(theme.toggleTheme());

// Problem 2 — Validate Signup Form
// Problem Statement

// Create a signup validation function.

// Rules:

// username:
// minimum 3 characters
// email:
// must contain @ and .
// password:
// minimum 8 characters
// must contain:
// capital letter
// small letter
// number

// Return:

// {
//   valid: true,
//   errors: []
// }

// or:

// {
//   valid: false,
//   errors: ["Password must contain a number"]
// }

// Do this:

// WITHOUT regex
const userData = {
  userName: "hs",
  email: "hunainnaeemanwargmail.com",
  password: "Hunain0",
};
const validateSignUp = (userDataObj) => {
  const resObj = {
    valid: true,
    errors: [],
  };
  let userName = userDataObj.userName;
  let email = userDataObj.email;
  let password = userDataObj.password;
  if (userName.length < 3) {
    resObj.valid = false;
    resObj.errors.push("Username should be of minimum 3 characters");
  }
  if (email.includes(".") && email.includes("@")) {
    resObj.valid = true;
  } else {
    resObj.valid = false;
    resObj.errors.push("Email should include '.' '@' ");
  }

  let hasSmall = false;
  let hasCapital = false;
  let hasSpecial = false;
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    const charcode = password.charCodeAt(i);
    if (charcode >= 48 && charcode <= 57) {
      hasNumber = true;
    } else if (charcode >= 65 && charcode <= 90) {
      hasCapital = true;
    } else if (charcode >= 97 && charcode <= 122) {
      hasSmall = true;
    } else {
      hasSpecial = true;
    }
  }

  let passwordCondition =
    password.length > 8 && hasCapital && hasNumber && hasSmall && hasSpecial;
  if (passwordCondition) {
    resObj.valid = true;
  } else {
    resObj.valid = false;
    resObj.errors.push(
      "Password must be atleast 8 char - containing capital char ,small char ,numbers and specialc char ",
    );
  }
  return resObj;
};

console.log(validateSignUp(userData));
