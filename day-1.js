// Problem 1 — Reverse a String
// Problem Statement

// Write a function that reverses a given string.

let namestr = "hello how are yOu?";

const reverseStr = (str) => {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr;
};

// console.log(reverseStr(namestr));

// Problem 2 — Count Vowels
// Problem Statement

// Write a function that counts how many vowels exist in a string.

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let splitedstr = str.split("");
  console.log(splitedstr);
  let count = 0;
  for (let i = 0; i < splitedstr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (splitedstr[i].toLowerCase() === vowels[j]) {
        count++;
      }
    }
  }
  return count;
};

// console.log(countVowels(namestr));

// Problem 3 — Check Palindrome
// Problem Statement

// Write a function that checks whether a string is a palindrome.

// A palindrome reads the same forward and backward.

let palindromstr = "AmanaplanacanalPanama";
const isPalindorme = (str) => {
  reversedStr = str.split("").reverse().join("");
  return str.toLowerCase() == reversedStr.toLowerCase()
    ? "it is plindrome"
    : " it's not palindorme";
};

// console.log(isPalindorme(palindromstr));

// Problem 4 — Find Largest Number in Array
// Problem Statement

// Write a function that returns the largest number from an array.

let numArr = [1, 2, 3, 4, 44, 55, 55, 666, 7, 8, 9, 44, 5, 6];

function largestNum(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// console.log(largestNum(numArr));

// Problem 5 — Remove Duplicates from Array
// Problem Statement

// Write a function that removes duplicate values from an array.

function removeDuplicate(arr) {
  let removeditems = [];
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (newArr.includes(arr[i])) {
      removeditems.push(arr[i]);
    }
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return { removeditems, newArr };
}
// SECOND METHDS
function removeDuplicate2(arr) {
  let newArr = [];

  let logic = arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}
// console.log(removeDuplicate2(numArr));

// Problem 6 — Find Even Numbers
// Problem Statement

// Write a function that returns only even numbers from an array.

function isEven(arr) {
  const newArr = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      newArr.push(element);
    }
  });
  return newArr;
}

// console.log(isEven(numArr));

// Problem 7 — Capitalize First Letter
// Problem Statement

// Write a function that capitalizes the first letter of a string.

const titleCase = (str) => {
  let toTitleCase = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return toTitleCase;
};

// console.log(titleCase(namestr));

// Problem 8 — Find Second Largest Number
// Problem Statement

// Write a function that returns the second largest number from an array.

const secondLargest = (arr) => {
  let largest = 0;
  let secondLargest = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > largest) {
      largest = element;
      secondLargest = largest;
    }
  }
  return secondLargest;
};

console.log(secondLargest(numArr));
