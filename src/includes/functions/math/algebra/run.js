run(f, x) {
	x = new BigNumber(x).toNumber()
	let out = 0
	try {
		out = f.core(x)
	} catch(e) {
		console.log(`[TheoremJS]: ${e}`)
	}
	return out
}
