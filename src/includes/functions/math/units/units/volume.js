volume(v, a, b) {
	const authorized = [
		"mm3",
		"ml",
		"cm3",
		"cl",
		"dl",
		"dm3",
		"l",
		"hl",
		"m3",
		"dam3",
		"hm3",
		"km3",
		"gal",
		"floz"
	]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Volume: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to cubic meters
	const factor = [
		new BigNumber(1).div(1000000000), // mm3
		new BigNumber(1).div(1000000), // ml
		new BigNumber(1).div(1000000), // cm3
		new BigNumber(10).div(1000000), // cl
		"0.0001", // dl
		new BigNumber(1).div(1000), // dm3
		new BigNumber(1).div(1000), // l
		0.1, // hl
		1, // m3
		1000, // dam3
		1000000, // hm3
		1000000000, //km3
		"0.0037854118", // gal,
		"2.95735295625e-5" // floz
	]
	const g = new BigNumber(v).times(factor[ia])

	const out = g.div(factor[ib])
	return out
}
