const add = function(a ,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let number of array) {
    sum += number
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let number of array) {
    product *= number
  }
  return product;
};

const power = function(base,exp) {
	let product = 1;
  for (let i = 0; i < exp; i++){
    product *= base;
  }
  return product
};

const factorial = function(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial (n-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
