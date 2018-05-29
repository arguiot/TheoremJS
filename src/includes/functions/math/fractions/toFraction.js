toFraction(x, p=15) {
	const BN = BigNumber.clone({ DECIMAL_PLACES: 20 })
	return new BN(x.toFixed(15)).toFraction(p)
}
