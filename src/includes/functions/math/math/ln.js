ln(x, n = 15) {
    let buffer = new BigNumber(0);
    for (let i = 0; i < n + (3 * x); i++) {
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
