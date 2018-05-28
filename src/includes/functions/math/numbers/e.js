e(n = 15) {
	const BN = BigNumber.clone({ DECIMAL_PLACES: n })
    let zero = new BN(0);
    let one = new BN(1);
    let rval;

    for (let i = 0; i <= n * 10; i++) {
        let fval = this.factorial(i);
        let invert = one.div(fval)
        zero = zero.plus(invert)
    }
    return new BN(zero);
}
