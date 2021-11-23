// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let resultArr = [];
  //   let count = 0;
  //   let tempArr = [];
  //   for (let i = 0; i < array.length; i++) {
  //     count++;
  //     tempArr.push(array[i]);
  //     if (count === size) {
  //       count = 0;
  //       resultArr.push(tempArr);
  //       tempArr = [];
  //     } else if (i === array.length - 1) resultArr.push(tempArr);
  //   }
  let index = 0;
  while (index < array.length) {
    resultArr.push(array.slice(index, index + size));
    index += size;
  }
  return resultArr;
}

module.exports = chunk;
