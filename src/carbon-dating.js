const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(number) {
	if (typeof number === 'string') {
    number = Number(number);
    if (typeof number === 'number' && !isNaN(number) && number !== 0 && number <= MODERN_ACTIVITY && number > 0) {
      let k = 0.693 / HALF_LIFE_PERIOD;
      let age = Math.ceil((Math.log(MODERN_ACTIVITY) - Math.log(number)) / k);
      return age;
    } else {
      return false;
    }    
  } else {
    return false;
  }
};
