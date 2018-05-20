toFraction(x, p=15) {
	const BN = BigNumber.another({ DECIMAL_PLACES: 20 })
	return new BN(x.toPrecision(15)).toFraction(p)
}
