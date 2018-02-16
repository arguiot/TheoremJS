deg2rad(x) {
    return new BigNumber(x).times(this.pi()).div(180)
}
