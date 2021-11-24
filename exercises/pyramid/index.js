// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '  0 1, 3 4   3-1 = 2
//       ' ### '  0, 4     3-2 = 1
//       '#####' 3-row

// function pyramid(n, row = 0, stair = "") {
//   const maxlength = n * 2 - 1;
//   if (row === n) {
//     return;
//   }
//   if (stair.length === maxlength) {
//     console.log(stair);
//     return pyramid(n, row + 1);
//   }
//   if (stair.length < n - row - 1 || stair.length >= maxlength - (n - row - 1))
//     stair += " ";
//   else stair += "#";
//   return pyramid(n, row, stair);
// }

function pyramid(n) {
  const maxlength = n * 2 - 1;
  for (let i = 0; i < n; i++) {
    let stair = "";
    for (let j = 0; j < maxlength; j++) {
      if (j < n - i - 1 || j >= maxlength - (n - i - 1)) stair += " ";
      else stair += "#";
    }
    console.log(stair);
  }
}

module.exports = pyramid;
