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
