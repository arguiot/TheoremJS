isPrime(n) {
	n = new BigNumber(n).abs()
	if (n.toNumber() * 0 !== 0) {
		return false;
	}
	if (n.lte(3)) return n.gt(1);
	if (n.mod(2).eq(0) || n.mod(3).eq(0)) return false;

	for (let i = 5; n.gte(i * i); i += 6) {
		if (n.mod(i).eq(0) || n.mod(i + 2).eq(0)) {
			return false
		}
	}

	return true;
}
