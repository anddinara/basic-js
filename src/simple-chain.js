const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {    
    try {
      if (typeof position === 'number' && position >= 1 && 
          position <= this.chain.length && !isNaN(position)) {
        position = Math.round(position);
        this.chain.splice(position - 1, 1);
        return this;
      } else {
        this.chain = [];
        throw new Error();
      }
    } catch (e) {
      this.chain = [];
      throw new Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
