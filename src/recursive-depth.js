const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    arr.forEach((el) => {
      if (Array.isArray(el))  {
        count = Math.max(this.calculateDepth(el), count);
        console.log(count);
      } else {
        count;
      }
    });
    count++;
    return count;
  }
};
