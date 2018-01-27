regression(data, deg) {
    if (deg == 1) {
        return this.linreg(data)
    } else {
        return this.polyreg(data, deg)
    }
}
linreg(array) {
    const x = Object.keys(array)
    const y = Object.values(array)
    const n = y.length;
    let sum_x = 0;
    let sum_y = 0;
    let sum_xy = 0;
    let sum_xx = 0;
    let sum_yy = 0;

    for (let i = 0; i < y.length; i++) {
        sum_x += parseFloat(x[i]);
        sum_y += parseFloat(y[i]);
        sum_xy += parseFloat(x[i] * y[i]);
        sum_xx += parseFloat(x[i] * x[i]);
        sum_yy += parseFloat(y[i] * y[i]);
    }

    const slope = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
    const intercept = (sum_y - slope * sum_x) / n;
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
