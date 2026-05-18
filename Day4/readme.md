# DAY-4

## PROBLEM 1

Implement a validation utility for authenticating user login credentials. The logic must perform strict structural and presence checks: validating that the email input is non-empty and contains the "@" character, and ensuring the password input is non-empty and maintains a length of at least 8 characters. The function should log and handle validation errors gracefully or log a success status upon meeting all constraints.

## SOLUTION

```javascript
const validateCredentials = (userCred) => {
  let isPasswordValid =
    userCred.password != "" && userCred.password.length >= 8;
  let isEmailValid =
    userCred.email.length != "" && userCred.email.includes("@");

  if (!isEmailValid) {
    console.log("Email should not be empty and must contain @");
    return;
  } else if (!isPasswordValid) {
    console.log("Password shoub be atleast 8 characters");
    return;
  }
  console.log("Login Successful");
};

const userData = {
  email: "test@gmail.com",
  password: "12345678",
};

// validateCredentials(userData);
```

---

## PROBLEM 2

Create a text-processing utility that transforms standard blog article titles into clean, URL-friendly slugs. The function must trim leading and trailing whitespace, cast all characters to lowercase, and replace internal whitespace boundaries with hyphens.

## SOLUTION

```javascript
const str = "JavaScript Basics for Beginners    ";

const generateSlug = (str) => str.trim().toLowerCase().replaceAll(" ", "-");
const generateSlugV2 = (str) => {
  let slug = str.trim().toLowerCase().split(" ").join("-");
  return slug;
};

let slug = generateSlugV2(str);
// console.log(slug);
```

---

## PROBLEM 3

Develop an in-memory data persistence layer that replicates standard Browser Web Storage API behaviors. Implement paired operations to serialize structured JavaScript objects into JSON string representations for storage, alongside corresponding retrieval logic that handles key checks and parses string data back into operational runtime objects.

## SOLUTION

```javascript
const simulateLocalStorgeObj = {};

const saveData = (key, value) => {
  simulateLocalStorgeObj[key] = JSON.stringify(value);

  return;
};
saveData("Hunain", { age: 20 });
saveData("sarah", { age: 23 });

const getData = (key) => {
  let data = simulateLocalStorgeObj[key];
  if (!data) return null;
  return JSON.parse(data);
};
const retriveSarah = getData("sarah");

// console.log(retriveSarah);
// console.log(typeof retriveSarah);
```

---

## PROBLEM 4

Construct a text search engine to filter a collection of user data schemas based on name matches. The matching algorithm must execute partial substring evaluation and remain entirely case-insensitive and resilient against trailing input whitespaces.

## SOLUTION

```javascript
const users = [
  { name: "Ali" },
  { name: "Sarah" },
  { name: "Ahmed" },
  { name: "Hunain" },
  { name: "Lycor" },
];

const search = (keyword) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(keyword.trim().toLowerCase()),
  );
};

// console.log(search(""));
```

---

## PROBLEM 5

Design a reusable, asynchronous API client pipeline utilizing Promise architectures and modern try/catch blocks. The system must natively orchestrate full lifecycle state tracking by logging loading indicators, validating HTTP response statuses, unpacking payloads, and returning standardized success/error response objects.

## SOLUTION

```javascript
const API_URL =
  "[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)";

const fetchData = async (apiurl) => {
  console.log("Loading .....");
  try {
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error(`Found Issue ${response.status}`);
    }
    const data = await response.json();
    console.log("[Status]: Fetch Successful!");
    return { data: data, error: null };
  } catch (error) {
    console.log("[Status]: Fetch Failed!");
    return { data: null, error: error.message };
  }
};

const runAPITest = async () => {
  const result = await fetchData(API_URL);
  if (result.data) {
    console.log(result.data.slice(0, 1));
  } else if (result.error) {
    console.log(`found Err ${result.error}`);
  }
};

runAPITest();
```
