speed(v, a, b) {
	const authorized = ["ms", "kh", "mph", "knot", "fts"]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Speed: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to ms
	const factor = [new BigNumber(1), new BigNumber(1).div(3.6), new BigNumber(0.44704), new BigNumber(0.514444), new BigNumber(0.3048)]
	const ms = new BigNumber(v).times(factor[ia])

	const out = ms.div(factor[ib])
}
