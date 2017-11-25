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
  
  factorial(n) {
  	let buffer = 1;
  	for (var i = 0; i < n; i++) {
  		buffer = new BigNumber(buffer).times(new BigNumber(i) + 1)
  	}
  	return buffer
  }
  pow(n, base) {
  	if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(new BigNumber(i).pow(base))
      }
  	return result.length == 1 ? result[0] : result
  }
  root(n, base) {
  	if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(new BigNumber(i).pow(new BigNumber(1).div(base)))
      }
  	return result.length == 1 ? result[0] : result
  }
  sqrt(n) {
  	if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(new BigNumber(i).sqrt())
      }
  	return result.length == 1 ? result[0] : result
  }
  apply(n, f) {
      if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(f(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  max() {
  	const sorted = this.sort(...arguments);
  	return sorted[sorted.length - 1]
  }
  min() {
  	const sorted = this.sort(...arguments);
  	return sorted[0]
  }
  product() {
  	return [...arguments].reduce((a, b) => new BigNumber(a).times(b)).toString()
  }
  sort() {
  	// https://gist.github.com/jasondscott/7073857
      Array.prototype.quickSort = function() {
  
          var r = this;
          if (this.length <= 1) {
              return this;
          }
          var less = [],
              greater = [];
  
          var pivot = r.splice(new BigNumber(r.length).div(2).floor(), 1);
  
          for (var i = r.length - 1; i >= 0; i--) {
              if (new BigNumber(r[i]).lessThanOrEqualTo(new BigNumber(pivot))) {
                  less.push(r[i]);
              } else {
                  greater.push(r[i]);
              }
          }
  
          var c = [];
  
          return c.concat(less.quickSort(), pivot, greater.quickSort());
      };
  
  	return [...arguments].quickSort()
  }
  sum() {
  	return [...arguments].reduce((a, b) => new BigNumber(a).plus(b)).toString()
  }
  average() {
  	const summed = this.sum(...arguments);
  	const average = new BigNumber(summed).div(arguments.length);
  	return average.toString()
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
  acos(n) {
      if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.acos(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  asin(n) {
      if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.asin(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  atan(n) {
      if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.atan(n[i]))
      }
  	return result.length == 1 ? result[0] : result
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
  f(v, func) {
  	return {
  		v: v,
  		f: func,
  		core: x => {
  			let regex = new RegExp(v)
  			let newStr = func.replace(regex, x)
  			return eval(newStr)
  		}
  	}
  }
  graph(f, from=-100, to=100, step=0.1) {
  	let array = {}
  	for (var i = new BigNumber(from); i.lessThanOrEqualTo(new BigNumber(to)); i = i.plus(new BigNumber(step))) {
  		array[i.toString()] = f.core(i).toPrecision(15)
  	}
  	return array
  }
  numeralSolve(f, end, from = -100, to = 100, step = 0.1) {
  	let p = this.graph(f, from, to, step)
  	let g = Object.values(p)
  	let y = []
  	for (let i in g) {
  		y.push(new BigNumber(g[i]).sub(end).abs().toNumber())
  	}
  	Object.prototype.getKey = function(value) {
  		var object = this;
  		return Object.keys(object).find(key => object[key] === value);
  	};
  	const min = this.min(...y)
  	return [p.getKey(min.toPrecision(15)), min]
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