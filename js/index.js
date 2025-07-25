console.log("Hello Krishna");

function isAnagrams(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().replace(/[\W_]/g, "").split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

console.log(isAnagrams("listen", "silent")); // true

console.log(isAnagrams("hello", "world")); // false

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replace(/[\W_]/g, "");
  return normalizedStr === normalizedStr.split("").reverse().join("");
}

function isArmstrong(num) {
  const digits = num.toString().split("").map(Number);
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(digit, digits.length),
    0
  );
  return sum === num;
}

function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacci(10));

function displayPrimeNumners(n) {
  const primes = [];
  for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}

const prm = displayPrimeNumners(50);

console.log(prm);

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

console.log(sortDescending([5, 3, 8, 1, 2])); // [8, 5, 3, 2, 1]
