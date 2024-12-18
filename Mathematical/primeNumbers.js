//  Create a function to check if a number is prime or not.
//  A prime number is a number that is only divisible by 1 and itself.

function isPrime(num) {
  if (num < 2) return false;
  let i = 2;

  while (i * i <= num) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}

console.log(isPrime(15));
