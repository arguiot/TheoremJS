std() {
	const mean = this.mean(...arguments);
	const sum  = this.sum(...[...arguments].map(e => {return (e - mean) ** 2}));
	const N    = [...arguments].length;

	return new BigNumber(Math.sqrt(sum / (N - 1)))
}
