slope(f, x=0, i=0.01) {
	const f1 = f.core(x)
	const x1 = x
	const f2 = f.core(x + i)
	const x2 = x + i
	return new BigNumber(f2).minus(f1).div(new BigNumber(x2).minus(x1))
}
