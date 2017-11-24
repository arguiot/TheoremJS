/*
**   © Arthur Guiot 2017
**         TheoremJS
*/

const BigNumber = require('bignumber.js');
class TheoremJS {
  constructor() {
  	// code
  }
  flatten(array) {
  	return array.reduce((a, b) => a.concat(b), []);
  }
  linspace(start, end, n) {
  	const diff = end - start;
  	const step = diff / n;
  	return this.arange(start, end, step);
  }
  arange(start, end, step, offset) {
  	const len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
  	const direction = start < end ? 1 : -1;
  	const startingPoint = start - (direction * (offset || 0));
  	const stepSize = direction * (step || 1);
  
  	return Array(len).fill(0).map((_, index) => startingPoint + (stepSize * index));
  }
  range(n) {
  	return this.arange(0, n, 1);
  }
  reshape(array, part) {
  	const tmp = [];
  	for (let i = 0; i < array.length; i += part) {
  		tmp.push(array.slice(i, i + part));
  	}
  	return tmp;
  }
  average() {
  	const summed = this.sum(...arguments);
  	const average = new BigNumber(summed).div(arguments.length);
  	return average.toString()
  }
  cos(n) {
      if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.cos(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  factorial(n) {
  	let buffer = 1;
  	for (var i = 0; i < n; i++) {
  		buffer = new BigNumber(buffer).times(new BigNumber(i) + 1)
  	}
  	return buffer
  }
  median() {
  	let array = [...arguments]
  	array.sort( (a, b) => new BigNumber(a).sub(b) );
  	const half = Math.floor(new BigNumber(array.length).div(2));
  	if(array.length % 2) {
  		return array[half].toString()
  	}
  	else {
  		return new BigNumber(new BigNumber(array[half-1]).add(array[half])).div(2).toString()
  	}
  }
  product() {
  	return [...arguments].reduce((a, b) => new BigNumber(a).times(b)).toString()
  }
  sin(n) {
      if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.sin(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  sum() {
  	return [...arguments].reduce((a, b) => new BigNumber(a).plus(b)).toString()
  }
  tan(n) {
      if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.tan(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  
}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new TheoremJS());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new TheoremJS();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.TheoremJS = new TheoremJS();
} else if (typeof global !== "undefined") {
  global.TheoremJS = new TheoremJS();
}