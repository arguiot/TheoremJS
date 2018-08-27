tan(n) {
	if (n.isComplex) {
		const Ta = n.a.times(2).toNumber()
		const Tb = n.b.times(2).toNumber()

		const sin = Math.sin(Ta)
		const cos = Math.cos(Ta)
		const cosh = Math.cosh(Tb)
		const sinh = Math.sinh(Tb)

		const re = sin / (cos + cosh)
		const im = sinh / (cos + cosh)
		
		return this.complex(re, im)
	}
    if (typeof n != 'object' || BigNumber.isBigNumber(n)) {
		n = BigNumber.isBigNumber(n) == true ? n.toNumber() : n
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(Math.tan(n[i]).toFixed(15))
    }
	return result.length == 1 ? result[0] : result
}
