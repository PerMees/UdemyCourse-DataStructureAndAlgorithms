// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n, count = 3, prev1 = 1, prev2 = 1) {
//   if (n < 3) return 1;
//   if (count < n) {
//     return fib(n, count + 1, prev2, prev1 + prev2);
//   }
//   return prev1 + prev2;
// }
// function fib(n) {
//     const result = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       const a = result[i - 1];
//       const b = result[i - 2];
//       result.push(a + b);
//     }
//     return result[n];
//   }
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(null, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
