regression(data, deg) {
	if (deg == 1) {
		return this.linreg(data)
	}
}
linreg(array) {
	const X = Object.keys(array)
	for(var i=0; i<X.length;i++) X[i] = parseFloat(X[i]);
	const Y = Object.values(array)
	const N = X.length // could also be Y.length
	let XY = [];
	let XX = [];
	for (var i = 0; i < X.length - 1; i++) {
		XX.push(X[i] * X[i])
		XY.push(X[i] * Y[i])
	}
	const sumX = this.sum(...X)
	const sumY = this.sum(...Y)
	const sumXY = this.sum(...XY)
	const sumXX = this.sum(...XX)
	const slope = (N * sumXY - sumX * sumY) / (N * sumXX - sumX ** 2)
	const intercept = (sumY - slope * sumX) / N
	return this.polynomial(slope, intercept)
}
