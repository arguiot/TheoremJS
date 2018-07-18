mass(v, a, b) {
	const authorized = [
		"mg",
		"cg",
		"dg",
		"g",
		"dag",
		"hg",
		"kg",
		"t",
		"oz",
		"lb"
	]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Speed: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to gram
	const factor = [
		1000,
		100,
		10,
		1,
		new BigNumber(1).div(10),
		new BigNumber(1).div(100),
		new BigNumber(1).div(1000),
		new BigNumber(1).div(1000000),
		"28.349523125",
		"453.59237"
	]
	const g = new BigNumber(v).times(factor[ia])

	const out = g.times(factor[ib])
	return out
}
