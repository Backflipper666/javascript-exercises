const repeatString = function(string, num) {
    let output = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < string.length; j++) {
            output += string[j];
        }
        
    }
    return output;
};
//
// Do not edit below this line
module.exports = repeatString;
