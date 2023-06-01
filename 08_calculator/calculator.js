const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(nums) {
	return nums.reduce((a,c) => a+c, 0);
};

const multiply = function(nums) {
  return nums.reduce((a,c) => a*c, 1);
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	if(x===0 || x===1) return 1;
  return x * factorial(x-1);
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
