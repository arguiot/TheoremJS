asinh(n) {
	if (typeof n != 'object' || n.isBigNumber) {
		n = n.isBigNumber == true ? n.toNumber() : n
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(Math.asinh(n[i]).toPrecision(15))
    }
	return result.length == 1 ? result[0] : result
}
