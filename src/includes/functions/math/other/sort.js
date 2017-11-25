sort() {
	// https://gist.github.com/jasondscott/7073857
    Array.prototype.quickSort = function() {

        var r = this;
        if (this.length <= 1) {
            return this;
        }
        var less = [],
            greater = [];

        var pivot = r.splice(new BigNumber(r.length).div(2).floor(), 1);

        for (var i = r.length - 1; i >= 0; i--) {
            if (new BigNumber(r[i]).lessThanOrEqualTo(new BigNumber(pivot))) {
                less.push(r[i]);
            } else {
                greater.push(r[i]);
            }
        }

        var c = [];

        return c.concat(less.quickSort(), pivot, greater.quickSort());
    };

	return [...arguments].quickSort()
}
