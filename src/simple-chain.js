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
      if (typeof position === 'number' && position > 1) {
        this.chain.splice(position - 1, 1);
        return this;
      } else {
        this.chain = [];
        throw new CustomError('Not implemented');
      }
    } catch (e) {
      this.chain = [];
      throw new CustomError('Not implemented');
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};


module.exports = chainMaker;
