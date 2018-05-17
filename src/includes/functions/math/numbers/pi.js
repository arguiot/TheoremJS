pi(digits = 15) {
	const Decimal = BigNumber.another({ DECIMAL_PLACES: digits })
    function arctan(x) {
        var y = x;
        var yPrev = NaN;
        var x2 = x.times(x);
        var num = x;
        var sign = -1;

        for (var k = 3; !y.equals(yPrev); k += 2) {
            num = num.times(x2);

            yPrev = y;
            y = (sign > 0) ? y.plus(num.div(k)) : y.minus(num.div(k));
            sign = -sign;
        }

        return y;
    }

    // Machin: Pi / 4 = 4 * arctan(1 / 5) - arctan(1 / 239)
    // http://milan.milanovic.org/math/english/pi/machin.html

    // we calculate pi with a few decimal places extra to prevent round off issues
    var DecimalPlus = BigNumber.another({ DECIMAL_PLACES: digits + 4 })
    var pi4th = new DecimalPlus(4).times(arctan(new DecimalPlus(1).div(5)))
        .minus(arctan(new DecimalPlus(1).div(239)));

    // the final pi has the requested number of decimals
    return new Decimal(4).times(new Decimal(pi4th))
}
