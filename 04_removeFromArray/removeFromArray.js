const removeFromArray = function(array, num, num2) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num || array[i] == num2) {
            continue;
        }
        output.push(array[i]);
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
