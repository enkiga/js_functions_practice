// Create a function that calculates the sum of all elements in an array.

function arraySum(arr) {
    let sum = 0;

    for (element in arr) {
        sum += arr[element];
    }

    return sum;
}

console.log(arraySum([1, 2, 3, 4, 5])); // 15