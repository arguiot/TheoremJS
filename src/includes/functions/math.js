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
