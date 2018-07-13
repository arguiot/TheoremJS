run(f, x) {
	x = new BigNumber(x).toNumber()
	let out = 0
	try {
		out = f.core(x)
	} catch(e) {
		throw `[TheoremJS]: ${e}`
	}
	return out
}
