## PROBLEM 1

Implement a counter engine utility that manages a stateful count using structural closures. The outer function must wrap private state accessors, returning an inner factory function capable of instantiating isolated counter instances equipped with explicit increment, decrement, and current value retrieval methods.

## SOLUTION

```javascript
function counter() {
  let count = 0;
  return function () {
    return {
      increment: function () {
        count++;
        return count;
      },
      decrement: function () {
        count--;
        return count;
      },
      getValue: function () {
        return count;
      },
    };
  };
}

function testCounter() {
  const createCounter = counter();

  const counter1 = createCounter();

  console.log("===== INITIAL VALUE =====");

  console.log(counter1.getValue());

  console.log("\n===== INCREMENT TESTS =====");

  console.log(counter1.increment());
  console.log(counter1.increment());
  console.log(counter1.increment());

  console.log("\n===== GET VALUE TEST =====");

  console.log(counter1.getValue());

  console.log("\n===== DECREMENT TESTS =====");

  console.log(counter1.decrement());
  console.log(counter1.decrement());

  console.log("\n===== FINAL VALUE =====");

  console.log(counter1.getValue());

  console.log("\n===== SECOND INSTANCE TEST =====");

  const counter2 = createCounter();

  console.log(counter2.getValue());
  console.log(counter2.increment());
  console.log(counter2.getValue());

  console.log("\n===== COUNTER 1 AFTER COUNTER 2 =====");

  console.log(counter1.getValue());
}
```

---

## PROBLEM 2

Create a higher-order initialization wrapper that forces a given target function to execute exactly once. The wrapper must track execution state internally via closure flags, returning cached initialization results or an explicit sentinel notification string upon subsequent invocations.

## SOLUTION

```javascript
function once(fn) {
  let ran = false;
  let result;
  return function (...args) {
    if (!ran) {
      ran = true;
      result = fn(...args);
      return result;
    }
    return "Already Called Once";
  };
}

const initialize = once(() => {
  return "Function Called";
});
```

---

## PROBLEM 3

Build a flexible data matching engine that filters an array of user data profiles dynamically based on an arbitrary, key-value criteria contract. The implementation must iterate cleanly through the query constraints to guarantee complete attribute correspondence for matched structures.

## SOLUTION

```javascript
const users = [
  { name: "Hunain", age: 19, active: true },
  { name: "Sara", age: 23, active: false },
  { name: "Ahmed", age: 32, active: true },
  { name: "Fatima", age: 32, active: true },
  { name: "Zain", age: 30, active: false },
  { name: "Ayesha", age: 27, active: true },
  { name: "Hamza", age: 24, active: false },
  { name: "Maryem", age: 29, active: true },
  { name: "Bilal", age: 35, active: true },
  { name: "Sana", age: 26, active: false },
];

const filterUsers = (arr, cond) => {
  const keys = Object.keys(cond);
  return arr.filter((user) => {
    return keys.every((key) => user[key] === cond[key]);
  });
};
```

---

## PROBLEM 4

Construct an API structural request limiter component that establishes a maximum operational request threshold. The module needs to isolate internal counters through closed state references, incrementing with each dispatch cycle while hard-blocking and throwing saturation flags once values breach boundaries.

## SOLUTION

```javascript
function createLimiter(limit) {
  let count = 0;

  return {
    request: function () {
      if (count < limit) {
        count++;
        return count;
      }
      return "limit reached";
    },
  };
}

const limiter = createLimiter(3);
```

---

## PROBLEM 5

Design a call analytics wrapper framework to profile function execution frequency. The wrapper function must seamlessly delegate input arguments to the primary operational logic while concurrently exposing structural telemetry methods to verify absolute interaction tallies.

## SOLUTION

```javascript
function trackCalls(fn) {
  let count = 0;
  const wrapper = function (...args) {
    count++;

    const result = fn(...args);
    return result;
  };
  wrapper.getCount = function () {
    return count;
  };
  return wrapper;
}

const trackedFn = trackCalls(() => {
  console.log(`func called.....`);
  return `fun return`;
});
```

---

## PROBLEM 6

Architect an enterprise-ready Feature Flags management system subclass containing strict toggle interfaces. The structural framework must handle dynamic flag manipulation safely, parsing string identifiers, confirming key validity, assessing flag state configurations, and outputting explicit deep-copied maps of active environmental properties.

## SOLUTION

```javascript
class FeatureFlags {
  constructor() {
    this.flags = {
      darkMode: false,
      newDashboard: false,
      betaCheckout: false,
      aiChatbot: true,
      videoStories: false,
      pushNotifications: true,
      twoFactorAuth: true,
      analyticsDashboard: false,
    };
  }
  enable(name) {
    if (typeof name !== "string" || !(name in this.flags)) {
      return "ERR : Enter Key as Str OR pass valid flag name";
    }
    if (this.flags[name]) {
      return `It Already Enabled`;
    }
    this.flags[name] = true;
    return "Enabled";
  }
  disable(name) {
    if (typeof name !== "string" || !(name in this.flags)) {
      return "ERR : Enter Key as Str OR pass valid flag name";
    }
    if (!this.flags[name]) {
      return `It Already Disabled`;
    }
    this.flags[name] = false;
    return "Disabled";
  }
  isEnabled(name) {
    if (typeof name !== "string" || !(name in this.flags)) {
      return "ERR : Enter Key as Str OR pass valid flag name";
    }
    if (this.flags[name]) {
      return true;
    }
    return false;
  }
  getAll() {
    return { ...this.flags };
  }
}

const flags = new FeatureFlags();
console.log(flags.enable("darkMode"));
console.log(flags.disable("darkMode"));
console.log(flags.disable("darkMode"));
console.log(flags.isEnabled("darkMode"));
console.log(flags.enable("darkMode"));
console.log(flags.getAll());
```
