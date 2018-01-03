regression(data, deg) {
    if (deg == 1) {
        return this.linreg(data)
    } else {
		return this.polyreg(data, deg)
	}
}
linreg(array) {
    const X = Object.keys(array)
    for (var i = 0; i < X.length; i++) X[i] = parseFloat(X[i]);
    const Y = Object.values(array)
    const N = X.length // could also be Y.length
    let XY = [];
    let XX = [];
    for (var i = 0; i < X.length - 1; i++) {
        XX.push(X[i] * X[i])
        XY.push(X[i] * Y[i])
    }
    const sumX = this.sum(...X)
    const sumY = this.sum(...Y)
    const sumXY = this.sum(...XY)
    const sumXX = this.sum(...XX)
    const slope = (N * sumXY - sumX * sumY) / (N * sumXX - sumX ** 2)
    const intercept = (sumY - slope * sumX) / N
    return this.polynomial(slope, intercept)
}
polyreg(data, deg) {
    const x = Object.keys(data)
    for (let i in x) {
        x[i] = parseFloat(x[i])
    }
    const y = Object.values(data)
    for (let i in y) {
        y[i] = parseFloat(y[i])
    }
    const lhs = [];
    const rhs = [];
    let a = 0;
    let b = 0;
    let c;
    let k;

    var i;
    let j;
    let l;
    const len = x.length;

    let results;
    let equation;
    let string;

    if (typeof deg === 'undefined') {
        k = 3;
    } else {
        k = deg + 1;
    }

    for (i = 0; i < k; i++) {
        for (l = 0; l < len; l++) {
            if (y[l] !== null) {
                a += x[l] ** i * y[l];
            }
        }

        lhs.push(a);
        a = 0;

        c = [];
        for (j = 0; j < k; j++) {
            for (l = 0; l < len; l++) {
                if (y[l] !== null) {
                    b += x[l] ** (i + j);
                }
            }
            c.push(b);
            b = 0;
        }
        rhs.push(c);
    }
    rhs.push(lhs);
    equation = this.gaussElimination(rhs, k);

    return this.polynomial(...equation.reverse())
}
