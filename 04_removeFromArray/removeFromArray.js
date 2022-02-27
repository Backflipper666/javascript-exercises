const removeFromArray = function(array, num) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            continue;
        }
        output.push(array[i]);
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
