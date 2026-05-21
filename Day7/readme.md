// Problem 1 — Paginate Products
// Problem Statement

// Create a function that returns products for a specific page.

// Rules:

// accept:
// products array
// current page
// items per page
// return only products for that page
// Example
// Input:
// products = [1,2,3,4,5,6,7,8]
// page = 2
// limit = 3

// Output:
// [4,5,6]

products = [1, 2, 3, 4, 5, 6, 7, 8];

const filterProductsForSpecificPage = (page, limit, productList) => {
const startIndex = (page - 1) \* limit;
return productList.slice(startIndex, startIndex + limit);
};

const result = filterProductsForSpecificPage(2, 3, products);
// console.log(result);

// Problem 2 — Create Password Validator
// Problem Statement

// Create a reusable password validator.

// Rules:

// minimum 8 characters
// at least:
// 1 capital letter
// 1 small letter
// 1 number
// 1 special character

// Return:

// {
// valid: true,
// message: "Strong Password"
// }

// or:

// {
// valid: false,
// message: "Password must contain at least one number"
// }

// Do this:

// WITHOUT regex
// using loops and conditions

let state = {
valid: false,
message: "Enter Password",
};
const validatePassword = (pass) => {
if (!pass.length >= 8) {
state.valid = false;
state.message = "Password must be at least 8 Character";
return;
}

for (let i = 0; i < pass.length; i++) {
const characterCode = pass.charCodeAt(i);

    let hasCapital = characterCode >= 65 && characterCode <= 95;
    let hasSmall = characterCode >= 97 && characterCode <= 122;
    let hasNumber = characterCode >= 48 && characterCode <= 57;
    let hasSpecial = false;

    if (hasCapital && hasSmall && hasNumber) {
      console.log("contains ,number,capital and small");
    }

}
};

const password = "assasadasdsd";

console.log(validatePassword(password));
