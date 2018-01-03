gaussElimination(input, order) {
    const matrix = input;
    const n = input.length - 1;
    const coefficients = [order];

    for (let i = 0; i < n; i++) {
        let maxrow = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxrow])) {
                maxrow = j;
            }
        }

        for (let k = i; k < n + 1; k++) {
            const tmp = matrix[k][i];
            matrix[k][i] = matrix[k][maxrow];
            matrix[k][maxrow] = tmp;
        }

        for (let j = i + 1; j < n; j++) {
            for (let k = n; k >= i; k--) {
                matrix[k][j] -= (matrix[k][i] * matrix[i][j]) / matrix[i][i];
            }
        }
    }

    for (let j = n - 1; j >= 0; j--) {
        let total = 0;
        for (let k = j + 1; k < n; k++) {
            total += matrix[k][j] * coefficients[k];
        }

        coefficients[j] = (matrix[n][j] - total) / matrix[j][j];
    }

    return coefficients;
}
