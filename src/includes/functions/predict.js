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
