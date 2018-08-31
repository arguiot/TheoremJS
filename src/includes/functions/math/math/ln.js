ln(x, n = 15) {
	if (x.isComplex) {
		return x.ln()
	}
    let buffer = new BigNumber(0);
    for (let i = 0; i < Math.ceil(n + (3 / 2 * x)); i++) {
		const n = new BigNumber(1)
					.div(new BigNumber(i).times(2).plus(1))
					.times(
						new BigNumber(x).minus(1)
						.div(new BigNumber(x).plus(1))
						.pow(new BigNumber(i).times(2).plus(1))
					)
        buffer = buffer.plus(n)
    }
    return new BigNumber(buffer.times(2).toFixed(n - 1))
}
