const repeatString = function (string, num) {
  // error check for negative numbers
  if (num < 0) {
    return "ERROR";
  }

  // variable to store string
  stringArray = "";

  // loop to add string repeats into variable
  let i = 0;
  while (i < num) {
    stringArray += string;
    i++;
  }
  return stringArray;
};

// Do not edit below this line
module.exports = repeatString;
