// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");

  //   return str
  //     .split("")
  //     .map((item, index) => {
  //       if (str[index - 1] === " " || index === 0) return item.toUpperCase();
  //       return item;
  //     })
  //     .join("");
}

module.exports = capitalize;
