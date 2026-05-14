# DAY-1

## PROBLEM 1

Implement a utility function to generate standardized usernames from a full name string. The logic must convert all characters to lowercase and replace whitespace with underscores to ensure the output is suitable for database identifiers or URL slugs.

## SOLUTION

```javascript
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
```

---

## PROBLEM 2

Develop an email validation function that performs a structural check on a string. The utility must confirm the presence of both an "@" symbol and a "." character, returning a boolean value to indicate if the basic requirements for a valid email format are met.

## SOLUTION

```javascript
const testEmail = "hunainaeemanwar@gmail.com";

const validateEmail = (email) => {
  return email.includes(".") && email.includes("@");
};
```

---

## PROBLEM 3

Create a text transformation utility that converts a user's name into title case. The function should iterate through each word in the string, ensuring the first letter is capitalized while all subsequent characters are set to lowercase.

## SOLUTION

```javascript
const userName = "hunain naeem anwar";

const tiltleCase = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
```

---

## PROBLEM 4

Implement a filtering mechanism for a collection of user objects. The goal is to traverse an array of employees and extract only those whose status is marked as active, demonstrating both imperative looping and functional filtering methods.

## SOLUTION

```javascript
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

const SecondMethodToFilterActiveUsers = (arrOfUsers) => {
  let areActive = arrOfUsers.filter((userObj) => userObj.active);

  return areActive;
};
```

---

## PROBLEM 5

Design a calculation engine to determine the total value of items within a shopping cart. The solution must include an advanced "Boss Challenge" implementation that allows for conditional accumulation of prices based on a specific product category.

## SOLUTION

```javascript
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
```

---

## PROBLEM 6

Construct a data deduplication utility for an array of technology tags. The function must verify the existence of each element before insertion into a new collection to ensure only unique values are returned.

## SOLUTION

```javascript
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

const removeDuplicateV2 = (arr) => {
  let newArr = [];
  for (let element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};
```

---

## PROBLEM 7

Build a search engine for a product catalog that filters items based on a substring match. The search should be case-insensitive, allowing users to find products by providing partial keywords.

## SOLUTION

```javascript
products = ["Keyboard", "Mouse", "Monitor"];

const searchProducts = (arr, product) => {
  let lowerproduct = product.toLowerCase();
  let searchedproduct = arr.filter((arrItem) =>
    arrItem.toLowerCase().includes(lowerproduct),
  );

  return searchedproduct;
};
```

---

## PROBLEM 8

Develop a sorting utility to organize user data based on age. The algorithm should perform a numerical sort to arrange objects in an array from the youngest user to the oldest.

## SOLUTION

```javascript
const users = [
  { name: "Ali", age: 24 },
  { name: "Sara", age: 19 },
  { name: "Ahmed", age: 30 },
];

const sortUsersByAge = (users) => {
  return users.sort((a, b) => a.age - b.age);
};
```

---

## PROBLEM 9

Create a password strength evaluator that validates input against security constraints. A "Strong" classification requires a minimum of 8 characters and the inclusion of at least one numeric value.

## SOLUTION

```javascript
const strongPass = "www123@@ss";
const weakPass = "ewrerff";

const checkPasswordStrength = (password) => {
  let isTrue =
    password.length >= 8 &&
    password.split("").some((char) => !isNaN(char) && char !== " ");
  return isTrue ? "Strong Passowrd" : "Weak Password";
};
```

---

## PROBLEM 10

Implement a data grouping function to categorize employees based on their assigned organizational roles. The resulting object should partition users into distinct arrays corresponding to 'admin' and 'user' keys.

## SOLUTION

```javascript
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
```
