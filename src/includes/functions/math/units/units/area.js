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
		
	]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Speed: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to square meters
	const add = [
		new BigNumber(1).div(1000000),
		new BigNumber(1).div(10000),
		new BigNumber(1).div(100),
		1,
		100,
		10000,
		10000,
		1000000
	]
	const factor = [
		1,
		new BigNumber(5).div(9),
		1
	]
	const g = new BigNumber(v).times(factor[ia])

	const out = g.div(factor[ib])
	return out
}
