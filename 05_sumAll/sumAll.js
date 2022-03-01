const sumAll = function(a, b) {
    if ( a < 0 || b < 0) {
        throw Error();
    }
    if (a < b) {
        let output = 0;
        while(a <= b){
            output = output + a;
            a++;
        }
      
        return output;

    }
};

// Do not edit below this line
module.exports = sumAll;
