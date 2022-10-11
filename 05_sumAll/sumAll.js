const sumAll = (a, b) => {
    let z = 0;
    let error_ = 'ERROR'

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return error_
    }

    else if ((a || b) < 0) {

        return error_
    }

    else if (a > b) {
        while (a != b - 1) {
            z += a;
            a--;
        }
    }

    else if (b > a) {
        while (b != a - 1) {
            z += b;
            b--;
        }
    }

    return z;
}




// Do not edit below this line
module.exports = sumAll;
