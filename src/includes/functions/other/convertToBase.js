convertToBase(x, n) {
	const BN = BigNumber.clone({ ALPHABET: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/" })
	return new BN(x).toString(n)
}
