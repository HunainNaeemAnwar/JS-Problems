# DAY-3

## PROBLEM 1

Implement a utility function to format a numerical value into a standardized currency string. The solution should utilize localized formatting rules, specifically catering to currency notations with support for custom fractional precision, currency codes, and standard notations.

## SOLUTION

```javascript
let price = 51003400;

const formatPrice = (price) => {
  return new Intl.NumberFormat("ur-PK", {
    style: "currency",
    maximumFractionDigits: 4,
    notation: "standard",
    currency: "PKR",
  }).format(price);
};
```

---

## PROBLEM 2

Develop a serialization utility that converts native JavaScript objects into standardized JSON strings. This function serves as a fundamental component for processing user data before transmitting it to a remote API or persisting it within storage engines.

## SOLUTION

```javascript
const obj = { name: "Ali", age: 22, hobbies: ["coding", "gaming"] };

const stringifyObj = (obj) => JSON.stringify(obj);
```

---

## PROBLEM 3

Design an asynchronous simulation engine that mimics a remote API request using JavaScript Promises. The implementation must include an explicit execution delay of two seconds before resolving with user data or handling failure branches conditionally.

## SOLUTION

```javascript
const fakeAPI = () => {
  return new Promise((resolve, reject) => {
    let conditionlogic = true;
    const data = { name: "Hunain", role: "Developer" };
    setTimeout(() => {
      if (conditionlogic) {
        resolve(data);
      } else {
        reject("Err - Something Went Wrong");
      }
    }, 2000);
  });
};
```

---

## PROBLEM 4

Implement an asynchronous consumption wrapper that utilizes `async/await` syntax to resolve data from a Promise-based mock API. The handler must pause execution until the promise resolves, allowing synchronous-style evaluation and logging of the returned payload.

## SOLUTION

```javascript
const getDataFromFakeAPI = async () => {
  const data = await fakeAPI();
  console.log(data);
};
```

---

## PROBLEM 5

Construct a structural debouncing utility to optimize rapid search inputs or high-frequency event streams. The function must return a closure that manages a internal timeout identifier, effectively clearing previous execution registrations if triggered repeatedly within a designated millisecond delay.

## SOLUTION

```javascript
const debouceSearch = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const searchFunc = (searchItem) => {
  console.log(`API Fetch triggered for query: "${searchItem}"`);
};

const internalTimeOutHandlerFunc = debouceSearch(searchFunc, 2000);

console.log("User Starts Typing");

internalTimeOutHandlerFunc("H");
internalTimeOutHandlerFunc("Hu");
internalTimeOutHandlerFunc("Hun");
internalTimeOutHandlerFunc("Huna");
internalTimeOutHandlerFunc("Hunai");
internalTimeOutHandlerFunc("Hunain");
```
