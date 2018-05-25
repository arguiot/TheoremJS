rand(n = 1, crypto = false) {
	const BN = BigNumber.another({ CRYPTO: crypto })
	let out = []
	for (var i = 0; i < n; i++) {
		out.push(BN.random())
	}
	return out.length == 1 ? out[0] : out
}
