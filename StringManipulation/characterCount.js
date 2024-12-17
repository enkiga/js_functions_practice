// write a function that counts the characters of a string

function charCount(str) {
    let count = 0;
    for (char in str) {
        count++;
    }

    return count;

}

console.log(charCount('hello')); // 5

