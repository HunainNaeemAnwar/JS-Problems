//These are the 10 problems of day 1

// Problem 1 — Username Generator
// Problem Statement

// Write a function that generates a username from a full name.

// Rules:

// convert everything to lowercase
// replace spaces with underscores (_)

const Fname = "John Doe";

const convertToUserName = (name) => {
  return name
    .toLowerCase()
    .split("")
    .map((char) => (char === " " ? "_" : char))
    .join("");
};

const shortVersionOfConvertUserName = (name) => {
  return name.toLowerCase().replaceAll(" ", "_");
};
// console.log(shortVersionOfConvertUserName(Fname));

// Problem 2 — Email Validator
// Problem Statement

// Write a function that checks whether an email is valid.

// Rules:

// must contain @
// must contain .
// should return true or false
// Example

const testEmail = "hunainaeemanwar@gmail.com";

const validateEmail = (email) => {
  return email.includes(".") && email.includes("@");
};
// console.log(validateEmail(testEmail));

// Problem 3 — Capitalize User Names
// Problem Statement

// Write a function that capitalizes the first letter of each word in a user's name.

const userName = "hunain naeem anwar";

const tiltleCase = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// console.log(tiltleCase(userName));

// Problem 4 — Filter Active Users
// Problem Statement

// Given an array of users, return only active users.

// Example
// Input:
// [
//   { name: "Ali", active: true },
//   { name: "Ahmed", active: false },
//   { name: "Sara", active: true }
// ]

// Output:
// [
//   { name: "Ali", active: true },
//   { name: "Sara", active: true }
// ]

const employees = [
  { name: "Ali", active: true },
  { name: "Ahmed", active: false },
  { name: "Sara", active: true },
];

const activeUsers = (arrOfUsers) => {
  let areActive = [];
  for (let user of arrOfUsers) {
    if (user["active"]) {
      areActive.push(user);
    }
  }
  return areActive;
};

// console.log(activeUsers(employees));

const SecondMethodToFilterActiveUsers = (arrOfUsers) => {
  let areActive = arrOfUsers.filter((userObj) => userObj.active);

  return areActive;
};
// console.log(SecondMethodToFilterActiveUsers(employees));

// Problem 5 — Shopping Cart Total
// Problem Statement

// Calculate the total price of all items in a shopping cart.

// Example
// Input:
// [
//   { name: "Keyboard", price: 1000 },
//   { name: "Mouse", price: 500 }
// ]

// Output:
// 1500

const cart = [
  { name: "Keyboard", price: 1000 },
  { name: "Mouse", price: 500 },
];

const totalOfCart = (items) => {
  let sum = items.reduce((acc, currItem) => acc + currItem.price, 0);

  return sum;
};

const totalOfCartV2 = (items) => {
  let sum = 0;

  for (let item of items) {
    sum += item.price;
  }

  return sum;
};

// console.log(totalOfCartV2(cart));

// The "Boss" Challenge:

// Imagine your shopping cart has a "category" for each item. Can you calculate the total price, but only for items in the "Electronics" category?

const cartData = [
  { name: "Keyboard", price: 1000, category: "Electronics" },
  { name: "Mouse", price: 500, category: "Electronics" },
  { name: "Apple", price: 100, category: "Food" },
];

const totalOfCartCategory = (items, category) => {
  let sum = items.reduce((acc, currItem) => {
    if (currItem.category === category) {
      return acc + currItem.price;
    } else {
      return acc;
    }
  }, 0);

  return sum;
};

// console.log(totalOfCartCategory(cartData, "Electronics"));

// Problem 6 — Remove Duplicate Tags
// Problem Statement

// Given an array of tags, remove duplicate values.

// Example
// Input:
// ["js", "react", "js", "node"]

// Output:
// ["js", "react", "node"]

const technologies = ["js", "react", "js", "node"];

const removeDuplicate = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      return newArr.push(element);
    }
  });
  return newArr;
};
// console.log(removeDuplicate(technologies));

const removeDuplicateV2 = (arr) => {
  let newArr = [];
  for (let element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};
// console.log(removeDuplicateV2(technologies));

// Problem 7 — Product Search
// Problem Statement

// Write a function that searches products by keyword.

// Return matching products only.

// Example
// Input:
// products = ["Keyboard", "Mouse", "Monitor"]
// search = "mo"

// Output:
// ["Mouse", "Monitor"]

products = ["Keyboard", "Mouse", "Monitor"];

const searchProducts = (arr, product) => {
  let lowerproduct = product.toLowerCase();
  let searchedproduct = arr.filter((arrItem) =>
    arrItem.toLowerCase().includes(lowerproduct),
  );

  return searchedproduct;
};
// console.log(searchProducts(products, "k"));
let stre = "dsaasdasd";
let isTrue = stre.includes("");
// console.log(isTrue);

// Problem 8 — Sort Users by Age
// Problem Statement

// Sort users from youngest to oldest.

// Example
// Input:
// [
//   { name: "Ali", age: 24 },
//   { name: "Sara", age: 19 },
//   { name: "Ahmed", age: 30 }
// ]

// Output:
// [
//   { name: "Sara", age: 19 },
//   { name: "Ali", age: 24 },
//   { name: "Ahmed", age: 30 }
// ]

const users = [
  { name: "Ali", age: 24 },
  { name: "Sara", age: 19 },
  { name: "Ahmed", age: 30 },
];

const sortUsersByAge = (users) => {
  return users.sort((a, b) => a.age - b.age);
};
// console.log(sortUsersByAge(users));

// Problem 9 — Password Strength Checker
// Problem Statement

// Write a function that checks password strength.

// Rules:

// minimum 8 characters
// must contain at least one number

// Return:

// "Strong Password"

// or

// "Weak Password"

const strongPass = "www123@@ss";
const weakPass = "ewrerff";

const checkPasswordStrength = (password) => {
  let isTrue =
    password.length >= 8 &&
    password.split("").some((char) => !isNaN(char) && char !== " ");
  return isTrue ? "Strong Passowrd" : "Weak Password";
};

// console.log(checkPasswordStrength(weakPass));

// Problem 10 — Group Users by Role
// Problem Statement

// Group users based on their role.

// Example
// Input:
// [
//   { name: "Ali", role: "admin" },
//   { name: "Sara", role: "user" },
//   { name: "Ahmed", role: "admin" }
// ]

// Output:
// {
//   admin: [
//     { name: "Ali", role: "admin" },
//     { name: "Ahmed", role: "admin" }
//   ],
//   user: [
//     { name: "Sara", role: "user" }
//   ]
// }

const employe = [
  { name: "Ali", role: "admin" },
  { name: "Sara", role: "user" },
  { name: "Ahmed", role: "admin" },
];

const filterByRole = (employees) => {
  let output = {
    admin: [],
    user: [],
  };
  for (let emp of employees) {
    if (emp.role == "user") {
      output.user.push(emp);
    } else if (emp.role == "admin") {
      output.admin.push(emp);
    }
  }
  return output;
};

// console.log(filterByRole(employe));
