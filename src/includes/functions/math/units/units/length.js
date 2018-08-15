length(v, a, b) {
	const authorized = ["mm", "cm", "dm", "m", "dam", "hm", "km", "yd", "ft", "mi", "in", "li", "au", "ly", "Nm"]
	if (!authorized.includes(a) || !authorized.includes(b)) {
		throw "[TheoremJS] Length: wrong units"
	}
	const ia = authorized.indexOf(a)
	const ib = authorized.indexOf(b)
	// to m
	const factor = [
		1 / 1000,
		1 / 100,
		1 / 10,
		1,
		10,
		100,
		1000,
		new BigNumber(0.9144),
		new BigNumber(0.3048),
		new BigNumber(1609.344),
		new BigNumber(25.4).div(1000),
		new BigNumber(6.35).times("0.0001"),
		new BigNumber("149597870700"),
		new BigNumber("9460730472580.8").times(1000),
		1852
	]
	const m = new BigNumber(v).times(factor[ia])

	const out = m.div(factor[ib])
	return out
}
