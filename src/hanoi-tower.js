const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let step = Math.pow(2, disksNumber) - 1;
  let totalSpeed = Math.floor((3600 / turnsSpeed) * step);
  return {turns: step, seconds: totalSpeed};
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
