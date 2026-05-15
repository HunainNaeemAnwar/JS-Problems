# DAY-2

## PROBLEM 1

Implement a utility function to extract the initials from a user's full name string. The logic must process the string to extract the first letter of each word and convert it to uppercase, creating a compact capital-letter representation of the full name.

## SOLUTION

```javascript
let fName = "hunain naeem anwar";

const userInitials = (user) => {
  return user
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};
```

---

## PROBLEM 2

Develop an aggregation engine that parses an array of product objects and tallies the total inventory count grouped by their respective categories. The utility should support multiple implementation strategies, including iterative looping and array traversal methods.

## SOLUTION

```javascript
const products = [
  { name: "Keyboard", category: "Electronics" },
  { name: "Apple", category: "Food" },
  { name: "Mouse", category: "Electronics" },
];

const countByCategory = (arrOfProduct) => {
  let categorizedObj = {};
  for (let eachProduct of arrOfProduct) {
    const cat = eachProduct.category;
    console.log(cat);
    if (categorizedObj[cat]) {
      categorizedObj[cat] += 1;
    } else {
      categorizedObj[cat] = 1;
    }
  }
  return categorizedObj;
};
const countByCategoryV2 = (arrOfProduct) => {
  let categorizedObj = {};
  arrOfProduct.forEach((element) => {
    const category = element.category;
    if (categorizedObj[category]) {
      categorizedObj[category] += 1;
    } else {
      categorizedObj[category] = 1;
    }
  });
  return categorizedObj;
};
```

---

## PROBLEM 3

Create a privacy masking utility for sensitive numeric identifiers such as credit card numbers. The function must obscure all leading characters with a placeholder symbol while preserving only the final four digits for verification purposes.

## SOLUTION

```javascript
const input = "1234567812345678";

const maskPassword = (password) => {
  const lastFourDigits = password.slice(-4);
  return lastFourDigits.padStart(password.length, "*");
};
```

---

## PROBLEM 4

Design a search algorithm to locate and return the item containing the maximum numerical price value from an array of product entities. Provide implementations covering basic iteration setups and advanced accumulation methods.

## SOLUTION

```javascript
const prductCart = [
  { name: "Keyboard", price: 1000 },
  { name: "Monitor", price: 5000 },
  { name: "Mouse", price: 500 },
];

const findHighestPrice = (arrOfProducts) => {
  let expensiveProduct = arrOfProducts[0];
  arrOfProducts.forEach((element) => {
    if (element.price > expensiveProduct.price) {
      expensiveProduct = element;
    }
  });
  return expensiveProduct;
};

const findHighestPriceV2 = (arrOfProducts) => {
  return arrOfProducts.reduce((acc, currentVal) => {
    if (currentVal.price > acc.price) {
      return currentVal;
    } else {
      return acc;
    }
  });
};
```

---

## PROBLEM 5

Implement a validation check to determine if every record in a collection matches a specified conditional criterion. The utility must evaluate whether all user objects inside an array have their active status flag set to true.

## SOLUTION

```javascript
const users = [
  { name: "Ali", active: true },
  { name: "Sara", active: true },
];

const isUsersActive = (arrOfUsers) => {
  return arrOfUsers.every((value) => value.active);
};

const isUsersActiveV2 = (arrOfUsers) => {
  for (const user of arrOfUsers) {
    if (!user.active) {
      return false;
    }
  }
  return true;
};
```

---

## PROBLEM 6

Construct a transformation utility that index-maps an array of data entities into a structured lookup object. The system must use a unique identifier property from each record as the dynamic key pointing to its corresponding object payload.

## SOLUTION

```javascript
const arr = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];

const convertToObj = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let keyOfObj = arr[i].id;
    let valueOfObj = arr[i];

    obj[keyOfObj] = valueOfObj;
  }
  return obj;
};

const convertToObjV2 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let keyOfObj = arr[i].id;
    let valueOfObj = arr[i];

    obj = { ...obj, [keyOfObj]: valueOfObj };
  }
  return obj;
};
```

---

## PROBLEM 7

Develop a data sanitization utility that screens an array and strips away all invalid or non-truthy entries. The function must filter the collection to retain only elements that resolve to a valid boolean true state.

## SOLUTION

```javascript
const mixArr = [0, "hello", false, 42, "", null];

const filterTruthy = (arr) => {
  return arr.filter((value) => Boolean(value));
};
```

---

## PROBLEM 8

Create an analytics processor for a task management dataset. The routine must scan an array of task objects and return a summarized metrics payload detailing the absolute volume of items alongside calculated pending and completed balances.

## SOLUTION

```javascript
const todoData = [
  { title: "Task 1", completed: true },
  { title: "Task 2", completed: false },
];

const todoStats = (arr) => {
  const obj = {
    total: 0,
    completed: 0,
    pending: 0,
  };
  arr.forEach((task) => {
    obj["total"] += 1;
    if (task.completed) {
      obj["completed"] += 1;
    } else {
      obj["pending"] += 1;
    }
  });
  return obj;
};
```

---

## PROBLEM 9

Implement an inspection routine to detect and isolate non-unique records within a sequence. The utility should evaluate an array of numbers and construct a filtered array consisting strictly of values that appear more than once.

## SOLUTION

```javascript
const numArr = [1, 2, 2, 3, 4, 4, 5];

const findDuplicate = (arr) => {
  const newArr = [];
  const duplicate = [];

  for (let val of arr) {
    if (!newArr.includes(val)) {
      newArr.push(val);
    } else if (newArr.includes(val)) {
      duplicate.push(val);
    }
  }

  return { newArr, duplicate };
};
```

---

## PROBLEM 10

Design an asynchronous execution flow that simulates system loading milestones. The process must print initial updates, handle a non-blocking timeout delay of two seconds, and trigger a success notification message upon completion.

## SOLUTION

```javascript
function loader() {
  console.log("Loading...");
  setTimeout(() => {
    console.log("Data Loaded");
  }, 2000);
}

loader();
```
