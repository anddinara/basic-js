const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(parameter) {
    this.parameter = parameter;
  } 

  
  validKey (text, key) {
    let repeat = Math.ceil(text.length / key.length);
    let validKey = key.repeat(repeat).slice(0, text.length).split('');
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        validKey.splice(i, 0, ' ');
      }
    }

    return validKey.join('');
  }
  
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error();
    }
    text = text.toUpperCase();
    key = this.validKey(text, key).toUpperCase();
    let array = [];
    let word = '';
    for (let i = 0; i < text.length; i++) {
      if (/[a-zA-Z]/.test(text[i])) {
        let value = ((text[i].charCodeAt() + key[i].charCodeAt()) - 2 * 65) % 26 + 65;
        array.push(value);
      } else {
        array.push(text[i]);
      }
    }
    
    array.forEach((arr) => {
      if (typeof arr === 'number') {
        word += String.fromCharCode(arr);
      } else {
        word += arr;
      }
    });
    
    if (this.parameter === undefined) {
      return word;
    } else {
      return word.split('').reverse().join('');
    }
    
  } 
  
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error();
    }
    
    text = text.toUpperCase();
    key = this.validKey(text, key).toUpperCase();
    let array = [];
    let word = '';
    for (let i = 0; i < text.length; i++) {
      if (/[a-zA-Z]/.test(text[i])) {
        let value = ((text[i].charCodeAt() - key[i].charCodeAt()) - 2 * 65) % 26;
        if (value < 0) {
          value += 26;
        }
        array.push(value + 65);
      } else {
        array.push(text[i]);
      }
    }
    
    array.forEach((arr) => {
      if (typeof arr === 'number') {
        word += String.fromCharCode(arr);
      } else {
        word += arr;
      }
    });
    
    if (this.parameter === undefined) {
      return word;
    } else {
      return word.split('').reverse().join('');
    }  
  }  
}

module.exports = VigenereCipheringMachine;
