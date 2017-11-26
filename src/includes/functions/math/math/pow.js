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
