// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [],
    counter = 1,
    row = 0,
    endRow = n - 1,
    col = 0,
    endCol = n - 1;
  for (let i = 0; i < n; i++) results.push([]);
  while (row <= endRow && col <= endCol) {
    // ? horizontal left to right
    for (let i = col; i <= endCol; i++) {
      results[row][i] = counter;
      counter++;
    }
    row++;
    // ? vertical top to bottom
    for (let j = row; j <= endRow; j++) {
      results[j][endCol] = counter;
      counter++;
    }
    endCol--;
    // ? horizontal right to left
    for (let i = endCol; i >= col; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // ? vertical bottom to top
    for (let j = endRow; j >= row; j--) {
      results[j][col] = counter;
      counter++;
    }
    col++;
  }
  return results;
}

module.exports = matrix;
