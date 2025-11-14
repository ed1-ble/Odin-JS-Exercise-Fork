const convertToCelsius = function(F) {
  return Math.ceil((F-32)*5/9*10)/10;
};

const convertToFahrenheit = function(C) {
  return Math.ceil((C*9/5+32)*10)/10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
