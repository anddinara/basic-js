const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach((ar) => {
    ar.forEach((a) => {
      if (a === '^^') {
        count ++;
      }
    });  
  });
  return count;
};
