const add = function(n1,n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(arr) {
	return arr.reduce((acc,curr)=>{return acc+curr},0);
};

const multiply = function(arr) {
  return arr.reduce((acc,curr)=>acc*curr,1);
};

const power = function(base,exp) {
	return base**exp;
};

const factorial = function(n) {
  let f = 1;
	for (let i = n;i>0;i--) {
    f *= i;
  };
  return f;
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
