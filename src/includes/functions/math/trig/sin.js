sin(n) {
    if (typeof n != 'object' || BigNumber.isBigNumber(n)) {
        n = BigNumber.isBigNumber(n) == true ? n.toNumber() : n
        n = [n]
    }
    let result = []
    for (var i = 0; i < n.length; i++) {
        result.push(Math.sin(n[i]).toFixed(15))
    }
    return result.length == 1 ? result[0] : result
}
