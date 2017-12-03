e(n = 15) {
    let zero = new BigNumber(0);
    let one = new BigNumber(1);
    let rval;

    for (let i = 0; i <= n * 10; i++) {
        let fval = this.factorial(i);
        let invert = one.div(fval)
        zero = zero.plus(invert)
    }
    rval = zero.toPrecision(n)
    return new BigNumber(rval);
}
