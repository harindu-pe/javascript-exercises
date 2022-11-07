const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }

  const index = num;

  let previousValue;
  let currentValue;
  let fib_num;
  let fib_array = [0, 1];

  for (let i = 0; i < num; i++) {
    previousValue = fib_array[i];
    currentValue = fib_array[i + 1];
    fib_num = previousValue + currentValue;
    fib_array.push(fib_num);
  }
  return fib_array[index];
};

// Do not edit below this line
module.exports = fibonacci;
