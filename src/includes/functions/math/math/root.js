root(n, base) {
	if (typeof n != 'object' || BigNumber.isBigNumber(n)) {
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(new BigNumber(Math.pow(new BigNumber(n[i]).toNumber(), new BigNumber(1).div(base).toNumber()).toFixed(15)))
    }
	return result.length == 1 ? result[0] : result
}
