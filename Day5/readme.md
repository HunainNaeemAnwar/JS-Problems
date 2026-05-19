# DAY-5

## PROBLEM 1

Implement a name normalization utility that processes a collection of user names to enforce a strict title-case formatting standard. The function must iterate through an array of varying-case string inputs and normalize each element so that the initial character is capitalized while all remaining characters are forced to lowercase.

## SOLUTION

```javascript
const arr = ["hUnAiN", "sArAh", "ALi"];

const formatArr = (arr) =>
  arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
```

---

## PROBLEM 2

Develop an analytics utility to determine task execution metrics from a state array. The function must evaluate a given collection of todo objects and accurately count the total number of tasks that have their completion flag set to true, outputting a filtered subset of the completed records.

## SOLUTION

```javascript
const taskArr = [
  { title: "Task 1", completed: true },
  { title: "Task 2", completed: false },
  { title: "Task 3", completed: true },
];

const findCompletedTask = (arr) => {
  return arr.filter((task) => task.completed);
};
```

---

## PROBLEM 3

Construct an asynchronous timing wrapper that wraps the native scheduling system within a Promise-based architecture. The utility must accept a duration parameter in milliseconds, suspend execution context for that duration, and smoothly resolve upon completion to enable structured async/await control flows.

## SOLUTION

```javascript
const delay = (ms) =>
  new Promise((reolve, reject) => {
    setTimeout(() => {
      console.log(`wait for ${ms / 1000} sec`);
      reolve(ms);
    }, ms);
  });

const runTask = async () => {
  try {
    console.log("func started");
    let ms = await delay(6000);
    console.log(`Executed After ${ms / 1000} Seconds`);
  } catch (error) {
    console.log(`err ${error}`);
  }
};
```

---

## PROBLEM 4

Design a numerical sorting utility to handle e-commerce product listings. The function must accept an array of product entities and perform an immutable, descending sort based on their price property, organizing them from the highest value to the lowest value without altering the original array references.

## SOLUTION

```javascript
const products = [
  { name: "Mouse", price: 500 },
  { name: "Monitor", price: 5000 },
  { name: "Keyboard", price: 1000 },
];

const sortProducts = (productsArr) =>
  [...productsArr].sort((a, b) => b.price - a.price);
```

---

## PROBLEM 5

Build a high-fidelity simulation engine for a remote search API endpoint. The system must accept an input string, simulate a network latency threshold of 1.5 seconds via standard web APIs, perform a case-insensitive substring search across a static data repository, and return a resolved promise containing the matching product strings or reject if type validation fails.

## SOLUTION

```javascript
const dummyProducts = [
  "Mouse",
  "Monitor",
  "Keyboard",
  "Microphone",
  "Laptop",
  "Headphones",
  "Smart Phone",
  "Tablet",
  "Graphic Card",
  "Motherboard",
];
const searchAPI = (searchItem) => {
  return new Promise((resolve, reject) => {
    if (typeof searchItem === "string") {
      let filteredItems = dummyProducts.filter((item) =>
        item.toLowerCase().includes(searchItem.toLowerCase()),
      );

      setTimeout(() => {
        resolve(filteredItems);
      }, 1500);
    } else {
      reject(new Error("Search query must be a string"));
    }
  });
};

const doSearch = async (query) => {
  console.log(`Searching for "${query}"... Please wait 1.5 seconds.`);
  let data = await searchAPI(query);
  console.log(data);
};
```
