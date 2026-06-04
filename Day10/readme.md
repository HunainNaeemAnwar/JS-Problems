## DAY 10

## PROBLEM 1

Create a reusable order management system capable of processing, tracking, and canceling consumer transactions. The class must handle order creation with status validation, prevent duplicate identifier entries, fetch records securely by ID with strict type validation, isolate groups of orders by their operational state, and toggle statuses dynamically during cancellation workflows.

## SOLUTION

```javascript
class OrderManagementSystem {
  constructor() {
    this.orders = [];
    this.allowedStatuses = ["pending", "done", "cancelled"];
  }
  add(id, customer, status = "pending") {
    if (
      id === undefined ||
      !customer ||
      !this.allowedStatuses.includes(status)
    ) {
      return "field must be filled";
    }

    let idExist = this.orders.some((order) => order.id === id);
    if (idExist) {
      return `Error: Order with ID ${id} already exists.`;
    }
    this.orders.push({ id, customer, status });
    return "Order Received";
  }

  getOrder(id) {
    if (typeof id !== "number") {
      return "Invalid Id - Id must be number";
    }
    let foundedOrder = this.orders.find((order) => order.id === id);

    return foundedOrder !== undefined ? foundedOrder : "No Order Found";
  }

  getByStatus(status) {
    if (this.allowedStatuses.includes(status)) {
      return this.orders.filter((order) => order.status === status);
    }
    return `Invalid parameter ${status}`;
  }

  cancel(id) {
    if (typeof id !== "number") {
      return "Invalid Id - Id must be number";
    }

    const index = this.orders.findIndex((order) => order.id === id);

    if (index !== -1) {
      this.orders[index].status = "cancelled";
      return "Order Canceled";
    }

    return "No Order Found";
  }
  getAllOrders() {
    return this.orders;
  }
}

function runTests() {
  const oms = new OrderManagementSystem();

  console.log("===== ADD TESTS =====");

  console.log(oms.add(1, "Ali"));
  console.log(oms.add(2, "Ahmed", "done"));
  console.log(oms.add(3, "Sara", "pending"));

  console.log(oms.add(1, "Duplicate User"));
  console.log(oms.add(2, "Another Duplicate", "done"));

  console.log(oms.add(undefined, "Usman"));
  console.log(oms.add(4));
  console.log(oms.add());

  console.log("\n===== GET ORDER TESTS =====");

  console.log(oms.getOrder(1));
  console.log(oms.getOrder(2));
  console.log(oms.getOrder(999));

  console.log(oms.getOrder("1"));
  console.log(oms.getOrder(null));
  console.log(oms.getOrder());

  console.log("\n===== GET BY STATUS TESTS =====");

  console.log(oms.getByStatus("pending"));
  console.log(oms.getByStatus("done"));
  console.log(oms.getByStatus("cancelled"));

  console.log(oms.getByStatus("completed"));
  console.log(oms.getByStatus(""));
  console.log(oms.getByStatus());

  console.log("\n===== CANCEL TESTS =====");

  console.log(oms.cancel(1));
  console.log(oms.getOrder(1));

  console.log(oms.cancel(999));

  console.log(oms.cancel("1"));
  console.log(oms.cancel(null));
  console.log(oms.cancel());

  console.log("\n===== STATUS AFTER CANCELLATION =====");

  console.log(oms.getByStatus("cancelled"));

  console.log("\n===== ALL ORDERS =====");

  console.log(oms.getAllOrders());

  console.log("\n===== FINAL TABLE =====");

  console.table(oms.getAllOrders());
}
```

---

## PROBLEM 2

Implement an internal inventory tracking manager designed to monitor product availability. The architecture must enforce structural data requirements during product provisioning, support real-time stock modifications (increments and decrements), prevent negative stock allocations through asset validations, and expose filter utilities to isolate low-stock units dropping below a critical threshold.

## SOLUTION

```javascript
class InventoryManagementSystem {
  constructor() {
    this.inventory = [];
    this.LOW_STOCK_THRESHOLD = 5;
  }
  add({ id, name, stock }) {
    if (id === undefined || !name || typeof stock !== "number") {
      return `Invalid Argument Or field is Empty`;
    }
    const productExists = this.inventory.some((item) => item.id === id);
    if (productExists) {
      return `Error: Product with ID ${id} already exists.`;
    }

    this.inventory.push({ id, name, stock });
    return `Product Added`;
  }
  getProduct(id) {
    if (id === undefined) {
      return `Invalid Argument ${id} - Pass Id as Number`;
    }
    let foundedProduct = this.inventory.find((product) => product.id === id);
    return foundedProduct ? foundedProduct : `No Product Found`;
  }
  getLowStockProducts() {
    return this.inventory.filter(
      (product) => product.stock <= this.LOW_STOCK_THRESHOLD,
    );
  }
  decreaseStock(id, stocksCount) {
    if (id === undefined || typeof stocksCount !== "number") {
      return `Invalid Argument ${id} - Pass Id and StockCount as Number`;
    }
    const product = this.inventory.find((item) => item.id === id);
    if (!product) {
      return "No Product Found";
    }
    if (product.stock < stocksCount) {
      return `Operation Rejected: Cannot decrease stock by ${stocksCount}. Only ${product.stock} items available.`;
    }
    product.stock -= stocksCount;
    return `Stock decreased by ${stocksCount}. New stock: ${product.stock}`;
  }
  increaseStock(id, stocksCount) {
    if (id === undefined || typeof stocksCount !== "number") {
      return `Invalid Argument ${id} - Pass Id and StockCount as Number`;
    }
    const product = this.inventory.find((item) => item.id === id);
    if (!product) {
      return "No Product Found";
    }

    product.stock += stocksCount;
    return `Stock increased by ${stocksCount}. New stock: ${product.stock}`;
  }
}
function testInventoryManagementSystem() {
  const ims = new InventoryManagementSystem();

  console.log("===== ADD PRODUCT TESTS =====");

  console.log(ims.add({ id: 1, name: "Keyboard", stock: 10 }));
  console.log(ims.add({ id: 2, name: "Mouse", stock: 5 }));
  console.log(ims.add({ id: 3, name: "Monitor", stock: 2 }));

  console.log(ims.add({ id: undefined, name: "Laptop", stock: 5 }));
  console.log(ims.add({ id: 4, stock: 5 }));
  console.log(ims.add({ id: 5, name: "Speaker", stock: "10" }));

  console.log("\n===== GET PRODUCT TESTS =====");

  console.log(ims.getProduct(1));
  console.log(ims.getProduct(2));
  console.log(ims.getProduct(999));

  console.log("\n===== LOW STOCK TESTS =====");

  console.log(ims.getLowStockProducts());

  console.log("\n===== DECREASE STOCK TESTS =====");

  ims.decreaseStock(1, 3);
  console.log(ims.getProduct(1));

  ims.decreaseStock(3, 1);
  console.log(ims.getProduct(3));

  console.log("\n===== INCREASE STOCK TESTS =====");

  ims.increaseStock(2, 10);
  console.log(ims.getProduct(2));

  ims.increaseStock(3, 5);
  console.log(ims.getProduct(3));

  console.log("\n===== FINAL INVENTORY =====");

  console.table(ims.inventory);
}
```

---

## PROBLEM 3

Develop an asynchronous background execution engine utilizing a First-In, First-Out (FIFO) pipeline mechanism. The manager must accept inbound payloads, validate the data schema constraints, support monitoring accessors to extract collection status metrics, and execute sequence mutations to discharge jobs off the header of the internal stack cleanly.

## SOLUTION

```javascript
class QueueManager {
  constructor() {
    this.queue = [];
  }

  add(task) {
    if (!task || typeof task !== "string" || task.trim() === "") {
      return "Invalid Argument Or field is Empty";
    }
    this.queue.push(task);
    return "Task Added";
  }

  countPendingTasks() {
    return this.queue.length;
  }

  getListOfPendingTasks() {
    return [...this.queue];
  }

  processNext() {
    if (this.queue.length === 0) {
      return "No pending tasks left to process";
    }
    const nextTask = this.queue.shift();
    return `Processing: ${nextTask}`;
  }
}

function testQueueManager() {
  const qm = new QueueManager();

  console.log("===== ADD TASK TESTS =====");
  console.log(qm.add("Upload Image"));
  console.log(qm.add("Send Email"));
  console.log(qm.add("Generate Report"));
  console.log(qm.add(""));

  console.log("\n===== PENDING TASK COUNT TESTS =====");
  console.log(qm.countPendingTasks());

  console.log("\n===== PENDING TASK LIST TESTS =====");
  console.log(qm.getListOfPendingTasks());

  console.log("\n===== PROCESS NEXT TESTS =====");
  console.log(qm.processNext());
  console.log(qm.processNext());

  console.log("\n===== PENDING TASKS AFTER PROCESSING =====");
  console.log(qm.countPendingTasks());
  console.log(qm.getListOfPendingTasks());

  console.log("\n===== FINAL QUEUE =====");
  console.table(qm.queue);
}
```

---

## PROBLEM 4

Build a multi-dimensional log analytics parser to compress telemetry streams into summarized interaction reports. The processing layer must systematically compute the volume of total operations, identify unique identities using collection tracking or native Set instances, derive engagement counts to evaluate the primary actor, and establish mapping tables highlighting localized action distributions.

## SOLUTION

```javascript
const input = [
  { user: "Ali", action: "login" },
  { user: "Ali", action: "purchase" },
  { user: "Sara", action: "login" },
  { user: "Ali", action: "login" },
  { user: "Ali", action: "login" },
];

const activityAnalytics = (arr) => {
  if (!arr || arr.length === 0) {
    return {
      totalActivities: 0,
      uniqueUsers: 0,
      mostActiveUser: null,
      actions: {},
    };
  }
  let totalActivities = arr.reduce((total, value) => {
    return value.action !== undefined && value.action !== ""
      ? total + 1
      : total;
  }, 0);

  let unique = [];
  let activeUsers = {};
  let actionsPeformed = {};

  for (let userOfInput of arr) {
    // find Unique users
    let uniqueCondition = unique.some(
      (uniqueUser) => uniqueUser.user === userOfInput.user,
    );
    if (!uniqueCondition) {
      unique.push(userOfInput);
    }

    //find mostactive Users
    if (!(userOfInput.user in activeUsers)) {
      activeUsers[userOfInput.user] = 1;
    } else {
      activeUsers[userOfInput.user] += 1;
    }
    //Tracking peformed Actions
    if (!(userOfInput.action in actionsPeformed)) {
      actionsPeformed[userOfInput.action] = 1;
    } else {
      actionsPeformed[userOfInput.action] += 1;
    }
  }

  // length Of Unique User
  let uniqueUsers = unique.length;

  // mostactive Users

  let mostActiveUser = Object.keys(activeUsers).reduce((highest, currVal) => {
    return activeUsers[highest] < activeUsers[currVal] ? currVal : highest;
  });

  return {
    totalActivities,
    uniqueUsers,
    activeUsers,
    mostActiveUser,
    actionsPeformed,
  };
};

function activityAnalyticsV2(arr) {
  if (!arr || arr.length === 0) {
    return {
      totalActivities: 0,
      uniqueUsers: 0,
      mostActiveUser: null,
      actions: {},
    };
  }

  const totalActivities = arr.length;

  const uniqueUsersSet = new Set();
  const activeUsers = {};
  const actionsMap = {};

  for (const log of arr) {
    // 1. Add user to the unique Set
    uniqueUsersSet.add(log.user);

    // 2. Track activity frequency per user
    activeUsers[log.user] = (activeUsers[log.user] || 0) + 1;

    // 3. Track action occurrences
    actionsMap[log.action] = (actionsMap[log.action] || 0) + 1;
  }

  // 4. Extract the most active user using your exact reduction logic
  const mostActiveUser = Object.keys(activeUsers).reduce((highest, currVal) => {
    return activeUsers[highest] < activeUsers[currVal] ? currVal : highest;
  });

  return {
    totalActivities,
    uniqueUsers: uniqueUsersSet.size,
    actions: actionsMap,
    mostActiveUser,
  };
}
```

---

## PROBLEM 5

Design a high-performance sliding-window rate-limiting utility to secure API boundaries. The control layer must store high-resolution epoch identifiers within memory-optimized tracking arrays, continuously prune timestamp indexes that fall outside the active configuration window, and perform limit verification prior to permitting traffic allocation.

## SOLUTION

```javascript
class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.timestamps = [];
  }
  request() {
    const now = Date.now();
    const absoluteCutoff = now - this.windowMs;

    this.timestamps = this.timestamps.filter((time) => time > absoluteCutoff);
    if (this.timestamps.length < this.maxRequests) {
      this.timestamps.push(now);
      return "Request Allowed";
    }
    return "Rate Limit Exceeded";
  }
}
```
