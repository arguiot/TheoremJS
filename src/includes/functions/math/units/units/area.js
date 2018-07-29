area(v, a, b) {
	const authorized = [
		"mm2",
		"cm2",
		"dm2",
		"m2",
		"dam2",
		"hm2",
		"ha",
		"km2",
		"in2",
		"ft2",
		"yd2",
		"mi2"
	]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Area: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to square meters
	const factor = [
		new BigNumber(1).div(1000000),
		new BigNumber(1).div(10000),
		new BigNumber(1).div(100),
		1,
		100,
		10000,
		10000,
		1000000,
		"0.00064516",
		"0.09290304",
		"0.83612736",
		"2589988.110336"
	]
	const g = new BigNumber(v).times(factor[ia])

	const out = g.div(factor[ib])
	return out
}
