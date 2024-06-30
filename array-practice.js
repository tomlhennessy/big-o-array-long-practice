const findMinimum = arr => {
  if (arr.length === 0) return undefined;
  let min = arr[0]; // Initialise min with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;

};
// Time Complexity: O(n) because we iterate through the array once
// Space Complexity: O(1) since we only use a constant amount of extra space


const runningSum = arr => {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  return result;

};
// Time Complexity: O(n) because we iterate through the array once
// Space Complexity: O(n) because we store the running sum in a new array


const evenNumOfChars = arr => {
  let count = 0;
  for (let str of arr) {
    if (str.length % 2 === 0) {
      count++;
    }
  }
  return count;

};
// Time Complexity: O(n) because we iterate through the array once
// Space Complexity: O(1) since we only use a constant amount of extra space


const smallerThanCurr = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    result.push(count);

  }
  return result;

};
// Time Complexity: O(n^2) because of the nested loops
// Space Complexity: O(n) because we store the counts in a new array


const twoSum = (arr, target) => {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(target - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;

};
// Time Complexity: O(n) because we iterate through the array once
// Space complexity: O(n) because we store the numbers in a set

const secondLargest = arr => {
  if (arr.length < 2) return undefined;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  if (secondLargest === -Infinity) {
    return largest;
  }

  return secondLargest;
};
// Time Complexity: O(n) because we iterate through the array once
// Space Complexity: O(1) since we only use a constant amount of extra space

const shuffle = (arr) => {
  let result = arr.slice(); // Make a copy of the array
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // swap elements
  }
  return result;
};
// Time Complexity: O(n) because we iterate through the array once
// Space Complexity: O(n) because we create a copy of the array


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
