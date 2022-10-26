const reverseString = function (string) {
  let inputString = string;
  let inputStringLength = inputString.length;
  let reverseString = "";
  let i = 0;

  // extract characters from string
  while (i <= inputStringLength) {
    // adding each character from the end of the input string
    reverseString += inputString.charAt(inputStringLength - i);
    i++;
  }

  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
