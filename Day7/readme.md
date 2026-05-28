# DAY-7

## PROBLEM 1

Implement a pagination utility for a product collection that extracts items corresponding to a specific page context. The mechanism must compute the correct starting index using the provided page number and item limit parameters, returning a precise subset of the data slice.

## SOLUTION

```javascript
products = [1, 2, 3, 4, 5, 6, 7, 8];

const filterProductsForSpecificPage = (page, limit, productList) => {
  const startIndex = (page - 1) * limit;
  return productList.slice(startIndex, startIndex + limit);
};

const result = filterProductsForSpecificPage(2, 3, products);
// console.log(result);
```

---

## PROBLEM 2

Develop a rule-based password validation engine that evaluates architectural strength constraints without relying on Regular Expressions (Regex). The validator must parse the string iteratively using character codes to enforce structural requirements, including a minimum length of 8 characters, at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.

## SOLUTION

```javascript
let state = {
  valid: false,
  message: "Enter Password",
};
const validatePassword = (pass) => {
  if (pass.length < 8) {
    state.valid = false;
    state.message = "Password must be at least 8 Character";
    return state;
  }
  let hasCapital = false;
  let hasSmall = false;
  let hasNumber = false;
  let hasSpecial = false;

  for (let i = 0; i < pass.length; i++) {
    const characterCode = pass.charCodeAt(i);
    if (characterCode >= 65 && characterCode <= 90) {
      hasCapital = true;
    } else if (characterCode >= 48 && characterCode <= 57) {
      hasNumber = true;
    } else if (characterCode >= 97 && characterCode <= 122) {
      hasSmall = true;
    } else {
      hasSpecial = true;
    }
  }

  if (hasCapital && hasSmall && hasNumber && hasSpecial) {
    state.valid = true;
    state.message = "Strong Password";
    return state;
  } else {
    state.valid = false;
    state.message = "Weak Password";
    return state;
  }
};

const password = "asssdwrerw###f55sff";

// console.log(validatePassword(password));
```

---

## PROBLEM 3

Construct an asynchronous product fetching pipeline that simulates network latency and state management protocols (loading, error, and data states). The architecture must process keyword-based search filters case-insensitively using Promises and async/await syntax handled within structured try/catch blocks.

## SOLUTION

```javascript
const productsItems = [
  "Laptop",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Webcam",
  "Printer",
  "Router",
  "SSD",
  "Graphics Card",
  "USB Cable",
];

const productPromise = (products) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (products) {
        res(products);
        return;
      }
      rej(new Error("Something Went Wrong"));
    }, 1000);
  });
};

// console.log(productPromise(productsItems));
const fetchProduct = async (searchQuery) => {
  try {
    console.log("Loading .....");

    const data = await productPromise(productsItems);
    let searchedItems = data.filter((elem) =>
      elem.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return searchedItems;
  } catch (error) {
    console.error("Failed to fetch or filter products:", error.message);
    throw error;
  }
};

const searchProducts = (search) => {
  return fetchProduct(search)
    .then((result) => console.log("Filtered Results:", result))
    .catch((err) => console.log("Caught outside:", err.message));
};

// searchProducts("");
```

---

## PROBLEM 4

Design a metrics aggregation engine to generate real-world statistical summaries from user data collections. The implementation should demonstrate both imperative loops and functional reduction (`reduce`) strategies to efficiently calculate total user count, active status counts, inactive status counts, and verified status configurations.

## SOLUTION

```javascript
const users = [
  { active: true, verified: true },
  { active: false, verified: false },
  { active: true, verified: false },
];

const generateStatics = (arr) => {
  const statics = { total: 0, active: 0, inactive: 0, verified: 0 };
  for (const user of arr) {
    statics.total += 1;
    if (user.active) {
      statics.active += 1;
    } else {
      statics.inactive += 1;
    }

    if (user.verified) {
      statics.verified += 1;
    }
  }
  return statics;
};

// console.log(generateStatics(users));
const generateStaticsV2 = (arr) => {
  return arr.reduce(
    (acc, user) => {
      acc.total += 1;
      acc.active += user.active ? 1 : 0;
      acc.verified += user.verified ? 1 : 0;
      acc.inactive += !user.active ? 1 : 0;
      return acc;
    },
    { total: 0, active: 0, inactive: 0, verified: 0 },
  );
};

// console.log(generateStaticsV2(users));
```

---

## PROBLEM 5

Implement a reusable, object-backed cache storage system using an object-oriented class architecture. The class must encapsulate operations for adding key-value data mappings (`set`), fetching cached assets (`get`), individual entry eviction (`remove`), and wiping the execution storage state entirely (`clear`).

## SOLUTION

```javascript
class CacheSystem {
  constructor() {
    this.storage = {};
  }
  set(key, value) {
    this.storage[key] = value;
  }
  get(key) {
    if (key in this.storage) {
      return this.storage[key];
    }
    return "key not found";
  }

  remove(key) {
    if (key in this.storage) {
      delete this.storage[key];
      return `Successfully removed key: '${key}'`;
    }
    return "key not found";
  }
  clear() {
    this.storage = {};
  }
}

const cache = new CacheSystem();
cache.set("user1", { name: "Hunain" });
cache.set("user2", { name: "Sarah" });
console.log(cache);
console.log(cache.remove("user1"));

console.log(cache.get("user1"));

console.log(cache);

cache.clear();
console.log(cache);
```
