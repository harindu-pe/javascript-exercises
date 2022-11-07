const add = function () {
  return arguments[0] + arguments[1];
};

const subtract = function () {
  return arguments[0] - arguments[1];
};

const sum = function (array) {
  if (array.length === 1) {
    return array[0];
  }
  const initialValue = 0;
  const sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sum;
};

const multiply = function (array) {
  const multi = array.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
  return multi;
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
