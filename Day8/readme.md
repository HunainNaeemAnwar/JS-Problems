## DAY 8

## PROBLEM 1

Create a reusable theme manager system utilizing JavaScript classes and private class fields. The implementation must allow setting the current theme, retrieving the current theme, and toggling dynamically between light and dark modes while rejecting invalid states with an appropriate warning mechanism.

## SOLUTION

```javascript
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
```

---

## PROBLEM 2

Develop a signup form validation function that executes comprehensive constraint validation on user data without the use of regular expressions. The validation rules require a username of at least 3 characters, an email containing both "@" and "." symbols, and a password of at least 8 characters that must contain at least one uppercase letter, one lowercase letter, one numeric character, and one special character.

## SOLUTION

```javascript
const userData = {
  userName: "hse",
  email: "hunainnaeemanwargmail.com",
  password: "Hunainr4r4#",
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
  if (!email.includes(".") || !email.includes("@")) {
    resObj.valid = false;
    resObj.errors.push("Email must contain both '@' and '.'");
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

  if (password.length < 8) {
    resObj.valid = false;
    resObj.errors.push("Password must be at least 8 characters long.");
  }
  if (!hasCapital || !hasSmall || !hasNumber || !hasSpecial) {
    resObj.valid = false;
    resObj.errors.push(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
    );
  }
  return resObj;
};

// console.log(validateSignUp(userData));
```

---

## PROBLEM 3

Implement an asynchronous API wrapper using Promises and async/await syntax to handle temporary network or data fetching failures via a retry mechanism. The utility must execute a designated promise-returning function up to a configured maximum threshold before propagating a final execution error and terminating the lifecycle loading state.

## SOLUTION

```javascript
const dummyUsers = [
  {
    id: 1,
    name: "Hunain Naeem",
    email: "hunain.naeemanwar@gmail.com",
    role: "Admin",
    status: "active",
    avatar:
      "[https://api.dicebear.com/7.x/avataaars/svg?seed=Hunain](https://api.dicebear.com/7.x/avataaars/svg?seed=Hunain)",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Editor",
    status: "active",
    avatar:
      "[https://api.dicebear.com/7.x/avataaars/svg?seed=John](https://api.dicebear.com/7.x/avataaars/svg?seed=John)",
  },
  {
    id: 3,
    name: "Sarah Smith",
    email: "sarah.smith@example.com",
    role: "Subscriber",
    status: "inactive",
    avatar:
      "[https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah](https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah)",
  },
  {
    id: 4,
    name: "Alex Mercer",
    email: "alex.m@example.com",
    role: "Subscriber",
    status: "pending",
    avatar:
      "[https://api.dicebear.com/7.x/avataaars/svg?seed=Alex](https://api.dicebear.com/7.x/avataaars/svg?seed=Alex)",
  },
  {
    id: 5,
    name: "Emma Watson",
    email: "emma.w@example.com",
    role: "Moderator",
    status: "active",
    avatar:
      "[https://api.dicebear.com/7.x/avataaars/svg?seed=Emma](https://api.dicebear.com/7.x/avataaars/svg?seed=Emma)",
  },
];
const API = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const randomSuccess = Math.random() > 0.5;
      if (randomSuccess) {
        res(dummyUsers);
        return;
      } else {
        rej(new Error("Something Went Wrong: No users found"));
      }
    }, 1500);
  });
};

const fetchWithRetry = async (promiseFunc, maxTry) => {
  for (let attempt = 1; attempt <= maxTry; attempt++) {
    try {
      const data = await promiseFunc();
      return data;
    } catch (error) {
      console.log(`Attempt ${attempt} failed.`);

      if (attempt === maxTry) {
        console.log("Loading finished with error.");
        throw new Error(
          `Failed after ${maxTry} attempts. Original error: ${error.message}`,
        );
      }
    }
  }
};
// fetchWithRetry(API, 2)
//   .then((finalData) => console.log("Final Output:", finalData))
//   .catch((err) => console.error("Final Error:", err.message));
```

---

## PROBLEM 4

Construct an analytics calculation engine to parse an array of product inventory items. The aggregation mechanism must traverse the inventory dataset to track metrics including total product records, total cumulative stock levels, structural average prices, and identify the single most expensive product record.

## SOLUTION

```javascript
const input = [
  { name: "Mouse", price: 500, stock: 10 },
  { name: "Monitor", price: 5000, stock: 2 },
];

const analytics = (arr) => {
  let totalProducts = arr.length;
  let totalStock = 0;
  let totalPriceSum = 0;
  let mostExpensive = arr[0];

  arr.forEach((element) => {
    totalPriceSum += element.price;
    totalStock += element.stock;
    if (element.price > mostExpensive.price) {
      mostExpensive = element;
    }
  });

  let averagePrice = totalPriceSum / totalProducts;

  return {
    totalProducts,
    totalStock,
    averagePrice,
    mostExpensive,
  };
};

// console.log(analytics(input));
```

---

## PROBLEM 5

Design a robust stateful user authentication and session management system using class encapsulation. The architecture must explicitly manage secure private session instances to encapsulate user context, facilitate session initialization upon credential submission, verify active login status, retrieve current object storage payloads, and clean individual data properties during the logout process.

## SOLUTION

```javascript
class AuthenticationSystem {
  #user;
  constructor() {
    this.#user = null;
  }
  login({ name, id } = {}) {
    if (!name || !id) {
      return `field shouldn't be empty`;
    }
    this.#user = { name, id };
    return "Login successful";
  }
  isLoggedIn() {
    return this.#user !== null;
  }
  getUser() {
    return this.#user;
  }
  logOut() {
    if (this.#user) {
      this.#user = null; // FIX: Wipes the session data clean
      return "Logout successful";
    }
    return "No active session found";
  }
}

const user1 = new AuthenticationSystem();

console.log(user1);
user1.login({ name: "hunain", id: 1 });
console.log(user1.getUser());
console.log(user1.isLoggedIn());
console.log(user1.logOut());
console.log(user1.isLoggedIn());
```
