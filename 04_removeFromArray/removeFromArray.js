const removeFromArray = function (array) {
  const args = Array.from(arguments);
  let newArray = array;

  // iterate over the input array and filter
  for (let i = 1; i < args.length; i++) {
    newArray = newArray.filter((number) => number !== args[i]);
  }

  // return new array
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
