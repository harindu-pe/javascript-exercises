const sumAll = function () {
  // parse the arguments
  let args = Array.from(arguments);
  // sort in ascending order
  args = args.sort();
  // setting the limits
  const start = args[0];
  const stop = args[args.length - 1];

  // error check
  if (
    typeof start !== "number" ||
    typeof stop !== "number" ||
    start < 0 ||
    stop < 0
  ) {
    return "ERROR";
  } else {
    //initialize counter variable
    let sumNum = 0;
    // loop
    for (let i = start; i <= stop; i++) {
      sumNum += i;
    }
    // return sum
    return sumNum;
  }
};

// Do not edit below this line
module.exports = sumAll;
