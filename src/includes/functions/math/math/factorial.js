factorial(n) {
    if (new BigNumber(n).equals(0)) {
        return 1;
    }
    return new BigNumber(n).times(this.factorial(new BigNumber(n).minus(1)))
}
