const palindromes = function (string) {
  // removing punctuation and word breaks
  let cleanString = string.replace("!", "");
  cleanString = cleanString.replace(/[^a-zA-Z ]/g, "");
  cleanString = cleanString.replaceAll(" ", "");

  // convert string to lowercase
  let forwardString = cleanString.toLowerCase();

  // split string to a new array
  let splitString = forwardString.split("");

  // reverse the array
  let reverseArray = splitString.reverse();

  // join array back to string
  let joinArray = reverseArray.join("");

  return forwardString === joinArray;
};

// Do not edit below this line
module.exports = palindromes;
