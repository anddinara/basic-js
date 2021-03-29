const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (isNaN(date)) {
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth();
  if (month === 0 || month === 1 || month === 11) {
    return 'winter';
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  } else if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  } else if (month === 8 || month === 9 || month === 10) {
    return 'fall';
  }
};
