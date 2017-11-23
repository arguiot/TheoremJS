/*
**   © Arthur Guiot 2017
**         TheoremJS
*/

class TheoremJS {
  average(array) {
  	const summed = this.sum(array);
  	const average = this.math.div(summed, array.length);
  	return average;
  }
  get math() {
  	const exactMath = {
  		add() {
  			return mathFunctions.addSubDiv(arguments,0);
  		},
  		sub() {
  			return mathFunctions.addSubDiv(arguments,1);
  		},
  		mul() {
  			return mathFunctions.mul(arguments);
  		},
  		div() {
  			return mathFunctions.addSubDiv(arguments,3);
  		}
  	};
  
  	var mathFunctions = {
  		addSubDiv(argArray, oper) {
  			const args = this.countDecimals(this.validMe(argArray));
  			const hComma = this.biggestComma(args);
  			const shifted = oper !== 3 ? hComma:0;
  			const res = this.shiftComma(this.countResult(this.toExponent(args,hComma),oper),shifted);
  			this.isSafeInteger(res);
  			return res;
  		},
  		mul(argArray) {
  			const args = this.countDecimals(this.validMe(argArray));
  			const intArr = [];
  			let commaSum = 0;
  			for (const i in args){
  				commaSum += args[i].comma;
  				intArr.push(args[i].integer);
  			}
  			return this.shiftComma(this.countResult(intArr,2),commaSum);
  		},
  		isSafeInteger(result) {
  			if(result<=-(2 ** 53-1)||result>=(2 ** 53-1)) throw "DisplayJS: The result is not a safe integer.";
  		},
  		shiftComma(result, commaPos) {
  			return this.toExponent(this.countDecimals([result]),-commaPos)[0];
  		},
  		countResult(nums, operation) {
  			let result = nums[0];
  			for(let i=1;i<nums.length;i++){
  				switch(operation){
  				case 0:
  					result += nums[i];
  					break;
  				case 1:
  					result -= nums[i];
  					break;
  				case 2:
  					result *= nums[i];
  					break;
  				case 3:
  					result /= nums[i];
  					break;
  				}
  			}
  			return result;
  		},
  		toExponent(args, commaPos) {
  			const returned = [];
  			for(const i in args){
  				args[i].comma -= commaPos;
  				const sign = args[i].comma>=0 ? "+":"";
  				returned.push(Number(`${args[i].integer.toString()}e${sign}${args[i].comma}`));
  			}
  			return returned;
  		},
  		biggestComma(args) {
  			const commaAr = [];
  			for(const i in args){
  				commaAr.push(args[i].comma);
  			}
  			return Math.min.apply(null,commaAr);
  		},
  		validMe(args) {
  			if(args.length<2) throw "DisplayJS: Set at least two numerical values.";
  			for(const i in args){
  				args[i] = parseFloat(args[i]);
  				if(typeof args[i] !== "number" || isNaN(args[i])) throw "DisplayJS: Every Math argument must be of type number.";
  				if(args[i] === Number.POSITIVE_INFINITY || args[i] === Number.NEGATIVE_INFINITY) throw "DisplayJS: Every Math argument must be a numerical value between positive and negative Infinity.";
  			}
  			return args;
  		},
  		countDecimals(args) {
  			const decimals = [];
  			for(const i in args){
  				let partDec = 0;
  				const splitted = args[i].toString().split("e");
  				const commaPos = splitted[0].indexOf(".");
  				partDec -= commaPos !== -1 ? splitted[0].length - 1 - commaPos:0;
  				partDec += isNaN(Number(splitted[1])) ? 0:Number(splitted[1]);
  				splitted[0] = Number(splitted[0].replace(".",""));
  				decimals.push({integer:splitted[0],comma:partDec});
  			}
  			return decimals;
  		}
  	};
  	return exactMath;
  }
  median(array) {
  	array.sort( (a, b) => this.math.sub(a, b) );
  	const half = Math.floor(this.math.div(array.length,2));
  	if(array.length % 2) {
  		return array[half];
  	}
  	else {
  		return this.math.div(this.math.add(array[half-1], array[half]), 2.0);
  	}
  }
  multiply(array) {
  	return array.reduce((a, b) => this.math.mul(a, b));
  }
  predict(array, val, text=false) {
  	const math = this.math;
  	const djs = this;
  	const X = Object.keys(array)
  	for(var i=0; i<X.length;i++) X[i] = parseFloat(X[i]);
  	const Y = Object.values(array)
  	const N = X.length // could also be Y.length
  	let XY = [];
  	let XX = [];
  	for (let i of this.range(X.length - 1)) {
  		XX.push(math.mul(X[i], X[i]))
  		XY.push(math.mul(X[i], Y[i]))
  	}
  	const sumX = djs.sum(X)
  	const sumY = djs.sum(Y)
  	const sumXY = djs.sum(XY)
  	const sumXX = djs.sum(XX)
  
  	const slope = math.div(math.sub(math.mul(N, sumXY), math.mul(sumX,sumY)), math.sub(math.mul(N, sumXX), math.mul(sumX, sumX)))
  	const intercept = math.div(math.sub(sumY, math.mul(slope, sumX)), N)
  	if (text == true) {
  		return `f(x) = ${slope}x+${intercept}; f(${val}) = ${val * slope + intercept}`;
  	}
  	else {
  		return val * slope + intercept;
  	}
  
  }
  sum(array) {
  	return array.reduce((a, b) => this.math.add(a, b));
  }
}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new Glottologist());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new Glottologist();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.Glottologist = new Glottologist();
} else if (typeof global !== "undefined") {
  global.Glottologist = new Glottologist();
}