const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
	if (typeof arr === 'number' || typeof arr === 'boolean' || arr === null || arr === undefined) {
    return false;  
  } else if (typeof arr === 'object' && Object.prototype.toString.call(arr) === '[object Object]') {
     return false;     
  }
  let str = '';
  arr.forEach((ar) => {
    console.log(ar);
    if(typeof ar === 'string') {
      ar = ar.trim(); 
      str += ar[0].toUpperCase();
    }    
  });
  console.log(str);
  return str.split('').sort().join('');
};