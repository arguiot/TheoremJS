numeralSolve(f, end, from = -100, to = 100, step = 0.1) {
	let p = this.graph(f, from, to, step)
	let g = Object.values(p)
	let y = []
	for (let i in g) {
		y.push(new BigNumber(g[i]).sub(end).abs().toNumber())
	}
	Object.prototype.getKey = function(value) {
		var object = this;
		return Object.keys(object).find(key => object[key] === value);
	};
	const min = this.min(...y)
	return [p.getKey(min.toPrecision(15)), min]
}
