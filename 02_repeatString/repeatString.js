const repeatString = (string, num) => {
    let stringMult = "";

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            stringMult += string;

        }
    }

    else {
        return "ERROR";
    }

    return stringMult;

};

// Do not edit below this line
module.exports = repeatString;
