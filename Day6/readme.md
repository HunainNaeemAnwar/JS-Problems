```
# DAY-6

## PROBLEM 1

Implement a data filtering system for product inventories. The function must evaluate an array of product objects and isolate items based on their structural availability properties, returning a compiled subset of records that are currently in stock.

## SOLUTION

```javascript
const products = [
  { name: "Keyboard", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Monitor", inStock: true },
];

const IsStockAvailable = (arr) => {
  return arr.filter((item) => item.inStock);
};

const IsStockAvailableV2 = (arr) => {
  let inStock = [];
  for (let item of arr) {
    if (item.inStock) inStock.push(item);
  }

  return inStock;
};

const IsStockAvailableV3 = (arr) => {
  let inStock = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].inStock) inStock.push(arr[i]);
  }

  return inStock;
};
```

---

## PROBLEM 2

Develop an automated localization and user localization greeting factory. The function should normalize and capitalize input names while dynamically evaluating system time parameters to map appropriate contextual salutations according to strict temporal bounds.

## SOLUTION

```javascript
const greetPerson = (name) => {
  if (!name) return "hello";
  let capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let currentTime = new Date().getHours();
  let greeting = "";

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return `${greeting},${capitalizedName}`;
};

const greetUser = greetPerson("Hunain");
```

---

## PROBLEM 3

Architect an asynchronous authentication provider pipeline simulating an external authorization gateway. The utility should implement deliberate temporal latencies via promise abstractions, performing multi-tier security evaluations on payload fields with robust error boundaries for handling rejections.

## SOLUTION

```javascript
const loginAPI = (credentails) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const emailvalidation =
        credentails.email.includes("@") &&
        credentails.email != "" &&
        credentails.email.includes(".");

      const passwordValidaion =
        credentails.password.length >= 8 &&
        credentails.password
          .split("")
          .some((char) => char !== " " && !isNaN(Number(char)));

      if (passwordValidaion && emailvalidation) {
        resolve(`login Successfull`);
        return;
      }
      reject(`Invalid Email Or Password`);
    }, 2000);
  });
};

const runLoginAPI = async () => {
  const credentials = {
    email: "Hunain@gmailcom",
    password: "2234324fdfa",
  };
  try {
    let login = loginAPI(credentials);
    let result = await login;
    console.log(result);
  } catch (error) {
    console.log(`err ${error}`);
  }
};
```

---

## PROBLEM 4

Design a relational bucket-grouping mechanism for operational data pipelines. The system must process an index of arbitrary business orders, grouping entities dynamically into dictionary buckets keyed by state tokens using multiple iterative collection techniques.

## SOLUTION

```javascript
const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "completed" },
  { id: 3, status: "pending" },
];

const groupByStatus = (orderList) => {
  if (!Array.isArray(orderList)) return;
  const groupedOrders = {};

  for (const order of orderList) {
    const currentStatus = order.status;
    if (!groupedOrders[currentStatus]) {
      groupedOrders[currentStatus] = [];
    }
    groupedOrders[currentStatus].push(order);
  }
  return groupedOrders;
};

const groupTasks = groupByStatus(orders);

const groupByStatusV2 = (orderList) => {
  if (!Array.isArray(orderList)) return;
  return orderList.reduce((acc, order) => {
    if (!acc[order.status]) {
      acc[order.status] = [];
    }

    acc[order.status].push(order);
    return acc;
  }, {});
};
const groupTasks2 = groupByStatusV2(orders);
```

---

## PROBLEM 5

Build a state synchronization orchestration wrapper for managing networking and mutation side-effects. The engine must systematically control structural properties reflecting real-time pipeline phases across retrieval operations, safely transitioning lifecycle parameters upon completion or intercepting fatal exceptions.

## SOLUTION

```javascript
const API_URl = "[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)";

let state = {
  loading: false,
  data: null,
  error: null,
};

const fetchAPIData = async (url) => {
  try {
    state.loading = true;
    console.log("State Update: [Loading...]\n", state);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP network error! Status: ${response.status}`);
    }
    const result = await response.json();
    state.data = result;
    return result;
  } catch (error) {
    state.error = error.message;
    console.error(`Execution Interrupted: ${error.message}`);
  } finally {
    state.loading = false;
    console.log("State Update: [Fetch Cycle Complete]");
  }
};

const runTest = async () => {
  const users = await fetchAPIData(API_URl);
  if (users) {
    const user1 = users[0];
    console.log(user1);
  }
};
```


```