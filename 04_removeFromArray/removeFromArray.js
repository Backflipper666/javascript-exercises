const removeFromArray = function(first, ...theArgs) {
    //declare a function with two parameters, one is input, the other is to delete from that input
    //check if second parameter is in the first parameter, it it is, return the first paramater without the 2nd parameter. If not, return 1st parameter as is
    let output = first;
    
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < theArgs.length; j++) {
            if ( first[i] == theArgs[j]) {
                output.splice(i, 1);
                
            }
        }
    }
    return output;

}

// Do not edit below this line
module.exports = removeFromArray;
