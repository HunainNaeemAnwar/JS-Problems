# DAY-11

## PROBLEM 1

Implement a memoization wrapper function designed to cache the results of expensive function calls. This utility should store previous outcomes based on function arguments to prevent redundant recalculations.

## SOLUTION

```javascript
function memoize(fn) {
  const cache = {};

  return function child(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Returning from key");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = (n) => {
  console.log("Calculating...");
  return n * n;
};

const fastSquare = memoize(slowSquare);
```

---

## PROBLEM 2

Construct a utility to flatten a deeply nested array into a single-dimensional structure. The implementation must recursively traverse the array, identify sub-arrays, and collect all primitive elements.

## SOLUTION

```javascript
function flattenArr(arr) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flattenArr(element));
    } else {
      result.push(element);
    }
  });
  return result;
}
```

---

## PROBLEM 3

Develop a chainable calculator class that maintains an internal state. The calculator must support arithmetic operations such as addition, subtraction, multiplication, and division, allowing multiple method calls to be chained together before retrieving the final value.

## SOLUTION

```javascript
class Calculator {
  constructor() {
    this.value = 0;
  }
  add(n) {
    this.value += n;
    return this;
  }
  subtract(n) {
    this.value -= n;
    return this;
  }
  multiply(n) {
    this.value *= n;
    return this;
  }
  divide(n) {
    this.value /= n;
    return this;
  }
  reset() {
    this.value = 0;
    return this;
  }
  getValue() {
    return this.value;
  }
}
```

---

## PROBLEM 4

Create a utility function to group an array of objects based on a specific property key. The output should be an object where each key represents a unique property value and contains an array of objects belonging to that category.

## SOLUTION

```javascript
const groupBy = (users, filterby) => {
  const groupedUsers = {};

  for (const element of users) {
    const key = element[filterby];
    if (key in groupedUsers) {
      groupedUsers[key].push(element);
    } else {
      groupedUsers[key] = [];
      groupedUsers[key].push(element);
    }
  }
  return groupedUsers;
};

const groupByV2 = (users, filterby) => {
  return users.reduce((acc, currItem) => {
    const key = currItem[filterby];
    acc[key] = acc[key] || [];
    acc[key].push(currItem);
    return acc;
  }, {});
};
```

---

## PROBLEM 5

Build a mini middleware execution system. The system should store a queue of functions and execute them sequentially. Each function must be provided with a 'next' mechanism to control the flow to the subsequent middleware.

## SOLUTION

```javascript
class Middleware {
  constructor() {
    this.middlewares = [];
  }
  use(fn) {
    this.middlewares.push(fn);
  }
  run() {
    let index = 0;
    const next = () => {
      if (index < this.middlewares.length) {
        const currentMiddleWare = this.middlewares[index];
        index++;
        currentMiddleWare(next);
      }
    };
    next();
  }
}
```

---

## PROBLEM 6

Implement an Event Emitter class to manage custom events. The utility must support registering event listeners, emitting events with associated data, and removing specific listeners from the event registry.

## SOLUTION

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return `Added CAllback To Event ${event}`;
  }
  emmit(event, data) {
    if (event in this.events) {
      this.events[event].forEach((callback) => callback(data));
      return `Event Emited`;
    }
    return `No ${event} event Found `;
  }
  off(event, callbackToDelete) {
    if (event in this.events) {
      this.events[event] = this.events[event].filter(
        (cb) => cb !== callbackToDelete,
      );
      return `Deleted Event CallBack`;
    }
    return `No Callback Found ${callbackToDelete}`;
  }
}
```
