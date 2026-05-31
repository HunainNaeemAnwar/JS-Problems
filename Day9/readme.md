## DAY 9

## PROBLEM 1

Implement a reusable shopping cart system encapsulated within a class structure. The system must support fundamental operations including adding products (with structural validation), removing products by their unique identifier, computing the cumulative price of all items using an array reduction strategy, retrieving the complete catalog of added items, and purging the cart state entirely.

## SOLUTION

```javascript
class Cart {
  constructor() {
    this.cart = [];
  }
  add({ id, name, price }) {
    if (id && name && price !== undefined) {
      this.cart.push({ id, name, price });
      return;
    }
    return "expected { id, name, price } - all field must be filled";
  }
  remove(id) {
    this.cart = this.cart.filter((item) => {
      return item.id != id;
    });

    return "Item removed Successfully";
  }
  getTotal() {
    return this.cart.reduce((acc, currnetValue) => {
      return acc + currnetValue.price;
    }, 0);
  }
  getAll() {
    return this.cart;
  }
  clear() {
    this.cart = [];
    return "Done Cart is empty now";
  }
}

const cart = new Cart();
// cart.add({ id: 1, name: "monitor", price: 7000 });
// cart.add({ id: 2, name: "monitor", price: 7000 });
// cart.add({ id: 3, name: "monitor", price: 7000 });
// console.log(cart);
// cart.remove(3);
// // console.log(cart);
// console.log(cart.getTotal());

// console.log(cart.getAll());
// console.log(cart.clear());

// console.log(cart.getAll());
```

---

## PROBLEM 2

Develop a role-based access control (RBAC) verification utility that determines whether a given user role possesses the required permission to execute an operation. The solution must validate the inputs against a predefined configuration mapping standard roles (admin, editor, user) to their corresponding permitted actions (create, update, delete, read).

## SOLUTION

```javascript
const STANDARD_PERMISSIONS = {
  admin: ["create", "update", "delete"],
  editor: ["create", "update"],
  user: ["read"],
};
const checkPermission = (role, permission) => {
  const roles = ["admin", "editor", "user"];

  let isRoleValid = role in STANDARD_PERMISSIONS;

  if (!isRoleValid) return "role is not valid";

  return STANDARD_PERMISSIONS[role].includes(permission);
};
// console.log(checkPermission("user", "read"));
// console.log(checkPermission("editor", "delete"));
// console.log(checkPermission("guest", "read"));
```

---

## PROBLEM 3

Design an asynchronous caching mechanism for API responses to optimize network performance and reduce redundant external requests. The class wrapper should intercept fetch sequences, serving data directly from an internal in-memory cache if the provided key is present, or otherwise requesting live data over HTTP and persisting the resultant JSON payload.

## SOLUTION

```javascript
class CacheWrapper {
  constructor() {
    this.cache = {};
  }

  async getData(key, url) {
    if (key in this.cache) {
      console.log(`Returning cached data for: "${key}"`);
      return this.cache[key];
    }

    console.log(`Cache miss! Fetching live data from API for: "${key}"...`);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      this.cache[key] = data;

      return data;
    } catch (err) {
      console.error(` Fetch failed: ${err.message}`);
      throw err;
    }
  }
}

const cacheSystem = new CacheWrapper();

const PRODUCTS_API =
  "[https://fakestoreapi.com/products?limit=2](https://fakestoreapi.com/products?limit=2)";
const USERS_API =
  "[https://jsonplaceholder.typicode.com/users?迫limit=2](https://jsonplaceholder.typicode.com/users?迫limit=2)";

async function runTest() {
  console.log("--- FIRST CALL (Products) ---");
  const products1 = await cacheSystem.getData("products", PRODUCTS_API);
  console.log(`Received ${products1.length} products.`);

  console.log("\n--- SECOND CALL (Products - Should be cached) ---");
  const products2 = await cacheSystem.getData("products", PRODUCTS_API);
  console.log(`Received ${products2.length} products.`);

  console.log("\n--- THIRD CALL (Users - Different API/Key) ---");
  const users1 = await cacheSystem.getData("users", USERS_API);
  console.log(`Received ${users1.length} users.`);
}

// runTest();
```

---

## PROBLEM 4

Construct a notification manager class capable of handling system alerts. The module must prioritize newly appended notifications by unshifting them into the internal stack, support programmatic removal and status updates (marking notifications as read), and provide a filtration layer to isolate all unread entries.

## SOLUTION

```javascript
class Notification {
  constructor() {
    this.notification = [];
  }

  add({ id, title, read = false }) {
    if (id && title) {
      this.notification.unshift({ id, title, read });
      return "Notification Added";
    }
    return "all the fields must be filled";
  }
  remove(id) {
    if (typeof id === "number") {
      this.notification = this.notification.filter(
        (singleNote) => singleNote.id !== id,
      );
      return "Item removed";
    }
    return "Id must be a number";
  }
  markAsRead(id) {
    if (typeof id === "number") {
      this.notification.forEach((singleNote) => {
        if (singleNote.id === id) {
          singleNote.read = true;
        }
      });

      return "Marked as read";
    }
    return "Id must be a number";
  }
  getAllUnread() {
    return this.notification.filter((singleNote) => !singleNote.read);
  }
}

const note1 = new Notification();

// console.log(note1);

// console.log(note1.add({ id: 1, title: "kaam one complete hogya hai" }));
// console.log(note1.add({ id: 2, title: "kaam two complete hogya hai" }));
// console.log(note1.add({ id: 3, title: "kaam two complete hogya hai" }));
// console.log(note1.add({ id: 4, title: "kaam two complete hogya hai" }));
// console.log(note1.add({ id: 5, title: "kaam two complete hogya hai" }));
// console.log(note1);
// console.log(note1.markAsRead(1));

// console.log(note1.getAllUnread());

// console.log(note1);
```

---

## PROBLEM 5

Implement an analytics event tracker system designed to capture user activity and aggregate interaction telemetry. The underlying class must map event labels to a dynamic dictionary object, automatically initializing tracking increments or incrementing pre-existing counter states, while rendering full diagnostics via lookup and exposure methods.

## SOLUTION

```javascript
class Tracker {
  constructor() {
    this.tracker = {};
  }

  track(event) {
    if (!(event in this.tracker)) {
      this.tracker[event] = 1;
    } else {
      this.tracker[event]++;
    }
    return "Event tracked successfully";
  }

  getCount(event) {
    if (!(event in this.tracker)) {
      return "No Event found";
    }
    return this.tracker[event];
  }
  getEvents() {
    return this.tracker;
  }
}

const event1 = new Tracker();
// console.log(event1.track("login"));
// console.log(event1.track("login"));
// console.log(event1.track("login"));
// console.log(event1.track("signup"));
// console.log(event1.track("signup"));
// console.log(event1.track("purchase"));
// console.log(event1.track("purchase"));
// console.log(event1.track("purchase"));
// console.log(event1.getCount("purchase"));
// console.log(event1.getEvents());
```

---

## PROBLEM 6

Build a comprehensive Mini User Management System combining advanced array transformations and reference searching. The architectural component must manage structural user entities, handle defensive removal criteria based on primitive variable checking, extract records dynamically using deterministic lookup predicates, and process conditional status attributes to count the volume of currently active platform accounts.

## SOLUTION

```javascript
class UserManagementSystem {
  constructor() {
    this.users = [];
  }

  add({ id, name, role, active = true }) {
    if (id && name && role && active !== undefined) {
      this.users.push({ id, name, role, active });
      return "User Added Successfully";
    }
    return "All fields must be filled i.e ,{ id, name, role, active}";
  }
  remove(id) {
    if (typeof id === "number") {
      this.users = this.users.filter((user) => user.id !== id);
      return "User Romoved Successfully";
    }
    return "Pass Id as Number";
  }
  find(id) {
    let foundUser = {};
    if (typeof id !== "number") {
      return "Pass Id as Number";
    }
    foundUser = this.users.find((user) => user.id === id);

    if (foundUser !== undefined) {
      return foundUser;
    } else {
      return "User Not Found";
    }
  }
  getAllUsers() {
    return this.users;
  }
  getActiveUsers() {
    let activeUsers = 0;
    this.users.forEach((user) => {
      if (user.active) {
        activeUsers++;
      }
    });

    return activeUsers;
  }
}

const userApp = new UserManagementSystem();

userApp.add({
  id: 1,
  name: "Hunain",
  role: "HR",
});
userApp.add({
  id: 2,
  name: "Sarah",
  role: "Employee",
  active: true,
});

userApp.add({
  id: 3,
  name: "Lycor",
  role: "Employee",
  active: false,
});
console.log(userApp.find(3));
// console.log(userApp.getAllUsers());
// console.log(userApp.getActiveUsers());
// console.log(userApp.remove(3));
```
