# DAY-3

## PROBLEM 1

Implement a utility function to format a raw numeric value into a localized currency string configuration, specifically tailoring the output format according to region and precision constraints.

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

Develop a parsing utility that serializes a structured JavaScript configuration or data object into a standardized, web-safe JSON string representation for persistent storage or network transmission.

## SOLUTION

```javascript
const obj = { name: "Ali", age: 22, hobbies: ["coding", "gaming"] };

const stringifyObj = (obj) => JSON.stringify(obj);
```

---

## PROBLEM 3

Construct an asynchronous utility function that simulates an external API network request using a native JavaScript Promise. The operation must introduce a deterministic delay before evaluating the outcome and returning user data.

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

Implement an asynchronous handling wrapper using modern async/await syntax to intercept, unpack, and log data generated from an unresolved promise returned by a simulation engine.

## SOLUTION

```javascript
const getDataFromFakeAPI = async () => {
  const data = await fakeAPI();
  console.log(data);
};
```

---

## PROBLEM 5

Design a higher-order debounce function to optimize search input event streams. The solution must maintain an internal closure state to clear impending timeouts if sequential invocations occur within a specified execution window.

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
