atanh(n) {
	if (typeof n != 'object') {
		n = BigNumber.isBigNumber(n) == true ? n.toNumber() : n
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(Math.atanh(n[i]).toFixed(15))
    }
	return result.length == 1 ? result[0] : result
}
