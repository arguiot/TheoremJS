cos(n) {
	if (n.isComplex) {
		const a = n.a.toNumber()
		const b = n.b.toNumber()

		const re = Math.cos(a) * Math.cosh(b)
		const im = Math.sin(a) * Math.sinh(b)

		return this.complex(re, -im)
	}
    if (typeof n != 'object' || BigNumber.isBigNumber(n)) {
		n = BigNumber.isBigNumber(n) == true ? n.toNumber() : n
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(Math.cos(n[i]).toFixed(15))
    }
	return result.length == 1 ? result[0] : result
}
