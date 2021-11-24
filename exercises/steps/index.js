// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let result = "";
//     // for (let j = 1; j <= i; j++) {
//     //   result += "#";
//     // }
//     // for (let k = i; k < n; k++) result += " ";

//     for (let j = 1; j <= n; j++) {
//       j <= i ? (result += "#") : (result += " ");
//     }
//     console.log(result);
//   }
// }

function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }
  stair.length <= row ? (stair += "#") : (stair += " ");
  return steps(n, row, stair);
}

module.exports = steps;
