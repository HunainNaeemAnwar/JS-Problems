// Problem 1 — Order Management System
// Problem Statement

// Create a reusable order management system.

// Features
// add order
// cancel order
// get order by id
// get all orders
// get orders by status
// Example
// );

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

// runTests();

// Problem 2 — Inventory Manager
// Problem Statement

// Create an inventory management system.

// Features
// add product
// increase stock
// decrease stock
// get product by id
// get low stock products
// Rules

// Low stock means:

// stock <= 5
// Example
// inventory.add({
// id: 1,
// name: "Keyboard",
// stock: 10
// });

// inventory.decreaseStock(1, 7);

// inventory.getLowStockProducts();

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

// testInventoryManagementSystem();

// Problem 3 — Build a Request Queue
// Problem Statement

// Create a request queue system.

// Features
// add request
// process next request
// view pending requests
// count pending requests
// Example
// queue.add("Upload Image");

// queue.add("Send Email");

// queue.processNext();
// Output
// Processing: Upload Image
// Hint
// Queues follow FIFO.

// Use:

// push()
// shift()

class QueueManager {
constructor() {
this.queue = [];
this.allowedStatuses = ["pending", "processing", "completed"];
}
add({ id, task, status = "pending" }) {
if (
typeof id !== "number" ||
!task ||
!this.allowedStatuses.includes(status)
) {
return `Invalid Argument Or field is Empty`;
}

    let isExist = this.queue.some((task) => task.id === id);
    if (isExist) {
      return `Error: Product with ID ${id} already exists.`;
    }

    this.queue.push({ id, task, status });
    return "Task Added";

}
getPendingTasks() {
return this.queue.reduce((count, currentTask) => {
return currentTask.status === "pending" ? count + 1 : count;
}, 0);
}
getListOfPendingTasks() {
return this.queue.filter((task) => task.status === "pending");
}
processNext() {
const nextTask = this.queue.find((task) => task.status === "pending");

    if (nextTask) {
      nextTask.status = "processing";
      return `processing ${nextTask.task} .......`;
    }

    return `No pending tasks left to process`;

}
}

function testQueueManager() {
const qm = new QueueManager();

console.log("===== ADD TASK TESTS =====");

console.log(qm.add({ id: 1, task: "Send Email" }));
console.log(qm.add({ id: 2, task: "Generate Report" }));
console.log(qm.add({ id: 3, task: "Backup Database", status: "processing" }));
console.log(qm.add({ id: 4, task: "Deploy App", status: "completed" }));

console.log(qm.add({ id: 1, task: "Duplicate Task" }));

console.log(qm.add({ id: "5", task: "Invalid Id" }));
console.log(qm.add({ id: 5, task: "" }));
console.log(qm.add({ id: 6, task: "Testing", status: "unknown" }));
console.log(qm.add({}));

console.log("\n===== PENDING TASK COUNT TESTS =====");

console.log(qm.getPendingTasks());

console.log("\n===== PENDING TASK LIST TESTS =====");

console.log(qm.getListOfPendingTasks());

console.log("\n===== PROCESS NEXT TESTS =====");

console.log(qm.processNext());
console.log(qm.processNext());
console.log(qm.processNext());
console.log(qm.processNext());

console.log(qm.processNext());

console.log("\n===== PENDING TASKS AFTER PROCESSING =====");

console.log(qm.getPendingTasks());
console.log(qm.getListOfPendingTasks());

console.log("\n===== FINAL QUEUE =====");

console.table(qm.queue);
}

testQueueManager();
