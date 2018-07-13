atan2(x, y) {
	if (BigNumber.isBigNumber(x)) {
		x = [x.toNumber()]
    }
	if (BigNumber.isBigNumber(y)) {
		y = [y.toNumber()]
    }
	let result = []
    for (var i = 0; i < x.length; i++) {
    	result.push(Math.atan2(x[i], y[i]))
    }
	return result.length == 1 ? result[0] : result
}
