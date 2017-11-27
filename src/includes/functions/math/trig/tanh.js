tanh(n) {
	if (typeof n != 'object' || n.isBigNumber) {
		n = n.isBigNumber == true ? n.toNumber() : n
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(Math.tanh(n[i]))
    }
	return result.length == 1 ? result[0] : result
}
