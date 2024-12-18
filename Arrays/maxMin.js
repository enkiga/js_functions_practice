//  Write functions to find the maximum and minimum values in an array of numbers.

//  max([1, 2, 3, 4, 5]) // returns 5
//  min([1, 2, 3, 4, 5]) // returns 1

function minMax(arr) {
  let result = [];
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  result.push(min);
  result.push(max);
  return result;
}

console.log(minMax([1, 2, 3, 4, 5, 5, 10, 11, 0, 12]));
