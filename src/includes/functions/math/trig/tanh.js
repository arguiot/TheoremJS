tanh(n) {
	if (n.isComplex) {
		const Ta = n.a.times(2).toNumber()
		const Tb = n.b.times(2).toNumber()

		const sin = Math.sin(Tb)
		const cos = Math.cos(Tb)
		const cosh = Math.cosh(Ta)
		const sinh = Math.sinh(Ta)

		const re = sinh / (cos + cosh)
		const im = sin / (cos + cosh)

		return this.complex(re, im)
	}
	if (typeof n != 'object' || BigNumber.isBigNumber(n)) {
		n = BigNumber.isBigNumber(n) == true ? n.toNumber() : n
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(Math.tanh(n[i]).toFixed(15))
    }
	return result.length == 1 ? result[0] : result
}
