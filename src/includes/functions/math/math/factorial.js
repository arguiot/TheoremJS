factorial(n) {
    if (new BigNumber(n).eq(0)) {
        return new BigNumber(1);
    }
    return new BigNumber(n).times(this.factorial(new BigNumber(n).minus(1)))
}
