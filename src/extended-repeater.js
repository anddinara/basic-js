const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';
  
  if (typeof options.addition !== 'string') {
    options.addition + '';
  }  
  if (options.addition === null) {
    options.addition = options.addition + ''; 
  }
  
  let arr1 = [];
  let arr2 = '';
  let result = [];
  for (let j = 0; j < options.additionRepeatTimes; j++) {
    arr1.push(options.addition);
  }
  arr1 = arr1.join(options.additionSeparator);
  arr2 = str + arr1;
  console.log(arr2);
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(arr2);
  }
  result = result.join(options.separator);
  return result;
  // console.log(arr1);
  // console.log(result);
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  