const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (arr.length === 0) {
    return [];
  }
  
  let sort = arr.slice();
  console.log(sort);
  
  for (let i = 0; i < sort.length; i++) {

    if (sort[i] === '--discard-next') {
      delete sort[i];
      delete sort[i+1];
    } else if (sort[i] === '--double-prev') {
      sort[i] = sort[i-1];
    } else if (sort[i] === '--double-next') {
      sort[i] = sort[i + 1];
    } else if (sort[i] === '--discard-prev') {
      delete sort[i];
      delete sort[i-1];
    }
  }
  
  let filtered = sort.filter(function (el) {
    return el != undefined;
  });
  
  return filtered;
};