const removeFromArray = (array, ...args) => {

    const filtArr = array.filter(value => !args.includes(value))

    return filtArr;


};

// Do not edit below this line
module.exports = removeFromArray;
