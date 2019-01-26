isPrime(n) {
    n = new BigNumber(n).abs()
    if (n.lt(2) || n.toNumber() * 0 !== 0) {
		return false;
	}

    let i = 0;
    let j;
    let sqrt;
    let arr = [2, 3, 5];

    for (; i < arr.length; i++) {
		if (n.eq(arr[i])) return true;
		if (n.mod(arr[i]).eq(0)) return false;
	}

    arr = [0, 4, 6, 10, 12, 16, 22, 24];
    sqrt = n.sqrt();

    for (i = 7; i <= sqrt.toNumber(); i += 30) {
		for (j=0; j < arr.length; j++) {
			if (n.mod(i + arr[j]).eq(0)) {
				return false;
			}
		}
	}
    return true;
}
