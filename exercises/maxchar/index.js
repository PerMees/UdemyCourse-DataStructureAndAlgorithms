// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let finalChar = "";

  //   let dict = new Map();
  //   for (let char of str) {
  //     if (dict.has(char)) dict.set(char, dict.get(char) + 1);
  //     else dict.set(char, 1);
  //   }
  //   let max = 0;
  //   for (let [key, value] of dict) {
  //     if (value > max) {
  //       max = value;
  //       finalChar = key;
  //     }
  //   }
  let chars = {};
  for (let char of str) {
    if (chars[char]) chars[char]++;
    else chars[char] = 1;
  }
  let max = 0;
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      finalChar = char;
    }
  }
  return finalChar;
}

module.exports = maxChar;
