//  Implement a function that capitalizes the first letter of each word in a sentence.

function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// Test cases
console.log(capitalize('hello world')); // Hello World

// Implement a function that capitalizes the first letter of each word in a sentence without using the built-in map method.

function capitalize(str) {
    let words = str.split(' ');
    let result = '';
    for (let word of words) {
        result += word[0].toUpperCase() + word.slice(1) + ' ';
    }
    return result.trim();
}

// Test cases
console.log(capitalize('hello world i am garoli')); // Hello World