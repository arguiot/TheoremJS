time(v, a, b) {
	const authorized = [
		"ms"
		"s",
		"m",
		"h",
		"d",
		"w",
		"mo",
		"y"
	]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Speed: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to gram
	const factor = [
		new BigNumber(1).div(1000),
		1,
		60,
		3600,
		86400,
		604800,
		"2592000",
		new BigNumber("365.2421891").times(24).times(3600)
	]
	const g = new BigNumber(v).times(factor[ia])

	const out = g.times(factor[ib])
	return out
}
