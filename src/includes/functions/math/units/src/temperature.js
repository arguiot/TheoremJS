temperature(v, a, b) {
	const authorized = [
		"c",
		"f",
		"k"
	]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Temperature: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to celsius
	const add = [
		0,
		-32,
		-273.15
	]
	const factor = [
		1,
		new BigNumber(5).div(9),
		1
	]
	const g = new BigNumber(v).plus(add[ia]).times(factor[ia])

	const out = g.div(factor[ib]).minus(add[ib])
	return out
}
