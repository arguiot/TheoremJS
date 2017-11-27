/*
**   © Arthur Guiot 2017
**         TheoremJS
*/

const BigNumber = require('bignumber.js');
class TheoremJS {
  constructor() {
  	// code
  }
  convertToBase(x, n) {
  	return new BigNumber(x).toString(n)
  }
  deg2rad(x) {
  	return new BigNumber(x).times(this.pi()).div(180)
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
      if (new BigNumber(n).equals(0)) {
          return new BigNumber(1);
      }
      return new BigNumber(n).times(this.factorial(new BigNumber(n).minus(1)))
  }
  pow(n, base) {
  	if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(new BigNumber(n[i]).pow(base))
      }
  	return result.length == 1 ? result[0] : result
  }
  root(n, base) {
  	if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(new BigNumber(Math.pow(new BigNumber(n[i]).toNumber(), new BigNumber(1).div(base).toNumber())))
      }
  	return result.length == 1 ? result[0] : result
  }
  sqrt(n) {
  	if (typeof n != 'object') {
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(new BigNumber(n[i]).sqrt())
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
  	return [...arguments].reduce((a, b) => new BigNumber(a).times(b))
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
  	return [...arguments].reduce((a, b) => new BigNumber(a).plus(b))
  }
  average() {
  	const summed = this.sum(...arguments);
  	const average = new BigNumber(summed).div(arguments.length);
  	return average
  }
  median() {
  	let array = [...arguments]
  	array.sort( (a, b) => new BigNumber(a).sub(b) );
  	const half = Math.floor(new BigNumber(array.length).div(2).toNumber());
  	if(array.length % 2) {
  		return array[half]
  	}
  	else {
  		return new BigNumber(array[half-1]).add(array[half]).div(2).toNumber()
  	}
  }
  acos(n) {
      if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.acos(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  acosh(n) {
  	if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.acosh(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  asin(n) {
      if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.asin(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  asinh(n) {
  	if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.asinh(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  atan(n) {
      if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.atan(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  atan2(x, y) {
  	if (typeof n != 'object' || n.isBigNumber) {
  		x = x.isBigNumber == true ? x.toNumber() : x
          x = [x]
  		y = y.isBigNumber == true ? y.toNumber() : y
          y = [y]
      }
  	let result = []
      for (var i = 0; i < x.length; i++) {
      	result.push(Math.atan2(x[i], y[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  atanh(n) {
  	if (typeof n != 'object') {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.atanh(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  cos(n) {
      if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.cos(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  cosh(n) {
  	if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.cosh(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  sin(n) {
      if (typeof n != 'object' || n.isBigNumber) {
          n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
      let result = []
      for (var i = 0; i < n.length; i++) {
          result.push(Math.sin(n[i]))
      }
      return result.length == 1 ? result[0] : result
  }
  sinh(n) {
  	if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.sinh(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  tan(n) {
      if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.tan(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  tanh(n) {
  	if (typeof n != 'object' || n.isBigNumber) {
  		n = n.isBigNumber == true ? n.toNumber() : n
          n = [n]
      }
  	let result = []
      for (var i = 0; i < n.length; i++) {
      	result.push(Math.tanh(n[i]))
      }
  	return result.length == 1 ? result[0] : result
  }
  f(v, func) {
  	return {
  		type: "function",
  		v: v,
  		f: func,
  		core: x => {
  			let regex = new RegExp(v)
  			let newStr = func.replace(regex, x)
  			return eval(newStr)
  		}
  	}
  }
  findRoots(f) {
      let exp = [];
      if (f.type == "polynomial") {
          switch (f.values.length - 1) {
              case 1:
                  exp.push(`${new BigNumber(f.values[1]).isNegative() ? '' : '-'}${f.values[1]} / ${f.values[0]}`)
                  break;
              case 2:
                  exp.push(`(${new BigNumber(f.values[1]).isNegative() ? '' : '-'}${new BigNumber(f.values[1]).abs()} + Math.sqrt(${new BigNumber(f.values[1]).pow(2).minus(new BigNumber(4).times(f.values[0]).times(f.values[2]))})) / ${new BigNumber(f.values[0]).times(2)}`)
                  exp.push(`(${new BigNumber(f.values[1]).isNegative() ? '' : '-'}${new BigNumber(f.values[1]).abs()} - Math.sqrt(${new BigNumber(f.values[1]).pow(2).minus(new BigNumber(4).times(f.values[0]).times(f.values[2]))})) / ${new BigNumber(f.values[0]).times(2)}`)
                  break;
              case 3:
                  let a = new BigNumber(f.values[0]).toNumber()
                  let b = new BigNumber(f.values[1]).toNumber()
                  let c = new BigNumber(f.values[2]).toNumber()
                  let d = new BigNumber(f.values[3]).toNumber()
                  if (Math.abs(a) < 1e-8) { // Quadratic case, ax^2+bx+c=0
                      a = b;
                      b = c;
                      c = d;
                      if (Math.abs(a) < 1e-8) { // Linear case, ax+b=0
                          a = b;
                          b = c;
                          if (Math.abs(a) < 1e-8) // Degenerate case
                              return [];
                          return [-b / a];
                      }
  
                      var D = b * b - 4 * a * c;
                      if (Math.abs(D) < 1e-8)
                          return [-b / (2 * a)];
                      else if (D > 0)
                          return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
                      return [];
                  }
  
                  // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
                  var p = (3 * a * c - b * b) / (3 * a * a);
                  var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
                  var roots;
  
                  if (Math.abs(p) < 1e-8) { // p = 0 -> t^3 = -q -> t = -q^1/3
                      roots = [Math.cbrt(-q)];
                  } else if (Math.abs(q) < 1e-8) { // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
                      roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
                  } else {
                      var D = q * q / 4 + p * p * p / 27;
                      if (Math.abs(D) < 1e-8) { // D = 0 -> two roots
                          roots = [-1.5 * q / p, 3 * q / p];
                      } else if (D > 0) { // Only one real root
                          var u = Math.cbrt(-q / 2 - Math.sqrt(D));
                          roots = [u - p / (3 * u)];
                      } else { // D < 0, three roots, but needs to use complex numbers/trigonometric solution
                          var u = 2 * Math.sqrt(-p / 3);
                          var t = Math.acos(3 * q / p / u) / 3; // D < 0 implies p < 0 and acos argument in [-1..1]
                          var k = 2 * Math.PI / 3;
                          roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)];
                      }
                  }
  
                  // Convert back from depressed cubic
                  for (var i = 0; i < roots.length; i++)
                      roots[i] -= b / (3 * a);
                  exp = roots;
                  break;
              default:
                  exp = [numeralSolve(f, 0)[0]]
          }
      } else {
          exp = [numeralSolve(f, 0)[0]]
      }
      return exp
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
  polynomial() {
  	const args = [...arguments].reverse()
  	let buffer = "";
  	for (let i in args) {
  		buffer += `${args[i]} * x^${i} ${i == args.length -1 ? '': '+ '}`
  	}
  	return {
  		type: "polynomial",
  		v: "x",
  		f: buffer,
  		values: [...arguments],
  		core: x => {
  			let regex = new RegExp("x")
  			let newStr = buffer.replace(regex, x)
  			return eval(newStr)
  		}
  	}
  }
  run(f, x) {
  	return f.core(x)
  }
  y_intercept(f) {
  	return f.core(0)
  }
  e(n = 15) {
      let zero = new BigNumber(0);
      let one = new BigNumber(1);
      let rval;
  
      for (let i = 0; i <= n * 10; i++) {
          let fval = this.factorial(i);
          let invert = one.div(fval)
          zero = zero.plus(invert)
      }
      rval = zero.toFixed(Number(n))
      return new BigNumber(rval);
  }
  goldenRatio(n = 15) {
  	return new BigNumber(1).plus(this.sqrt(5)).div(2)
  }
  pi(digits = 15) {
  	const Decimal = BigNumber.another({ DECIMAL_PLACES: digits })
      function arctan(x) {
          var y = x;
          var yPrev = NaN;
          var x2 = x.times(x);
          var num = x;
          var sign = -1;
  
          for (var k = 3; !y.equals(yPrev); k += 2) {
              num = num.times(x2);
  
              yPrev = y;
              y = (sign > 0) ? y.plus(num.div(k)) : y.minus(num.div(k));
              sign = -sign;
          }
  
          return y;
      }
  
      // Machin: Pi / 4 = 4 * arctan(1 / 5) - arctan(1 / 239)
      // http://milan.milanovic.org/math/english/pi/machin.html
  
      // we calculate pi with a few decimal places extra to prevent round off issues
      var DecimalPlus = BigNumber.another({ DECIMAL_PLACES: digits + 4 })
      var pi4th = new DecimalPlus(4).times(arctan(new DecimalPlus(1).div(5)))
          .minus(arctan(new DecimalPlus(1).div(239)));
  
      // the final pi has the requested number of decimals
      return new BigNumber(new Decimal(4).times(pi4th).toFixed(digits + 1))
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