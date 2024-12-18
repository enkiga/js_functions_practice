//  Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Test cases
console.log(
  filterArray([2, 3, 4, 5, 3, 4, 1, 23, 12, 15, 5, 10], (val) => val !== 5)
); // [2, 3, 4]
