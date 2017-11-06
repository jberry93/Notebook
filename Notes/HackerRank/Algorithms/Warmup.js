/**
 * This is my collection of answers for the Warmup challenges
 * Note: These may not be the BEST answers but they are the first solutions that
 * I came up with that pass the set of test cases provided by Hackerrank
 */

// Simple Array Sum
function simpleArraySum(n, ar) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += ar[i] ? ar[i] : 0;
  }
  return sum;
}

// Compare the Triplets
function solve(a0, a1, a2, b0, b1, b2) {
  let A = 0;
  let B = 0;
  // I love the terseness of the ternary operator :)
  a0 > b0 ? (a0 !== b0 ? A++: null) : (a0 !== b0 ? B++ : null);
  a1 > b1 ? (a1 !== b1 ? A++: null) : (a1 !== b1 ? B++ : null);
  a2 > b2 ? (a2 !== b2 ? A++: null) : (a2 !== b2 ? B++ : null);
  return [A, B];
}

// A Very Big Sum
/**
 * Same as Simple Array Sum since the highest bit value that an integer
 * calculated by JavaScript is greater than 32 bits. The maximum bit value for
 * a JavaScript integer without losing precision is 53 bits.
 * Cite: https://stackoverflow.com/questions/4557509/javascript-summing-large-integers
 */

// Diagonal Difference
function solve(n, a) {
  let x = 0;
  let y = 0;
  let xcounter = 0;
  let ycounter = n - 1;
  for (let arr of a) {
    x += arr[xcounter];
    y += arr[ycounter];
    xcounter++;
    ycounter--;
  }
  let ans = x > y ? x - y : y - x;
  console.log(ans);
}

// Plus Minus
function solve(n, arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let i of arr) {
    i === 0 ? zero++ : (i > 0 ? pos++ : (i < 0 ? neg++ : null));
  }
  console.log((pos / n).toPrecision(6));
  console.log((neg / n).toPrecision(6));
  console.log((zero / n).toPrecision(6));
}
