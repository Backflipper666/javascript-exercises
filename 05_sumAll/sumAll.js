const sumAll = function(a, b) {
    if (typeof(a) == "string" || typeof(b) == "string" || typeof(a) == "object" || typeof(b) == "object" ) {
        return "ERROR";
   }
    else {
        if ( a < 0 || b < 0) return "ERROR";
    
    if (b < a) {
        let output = 0;
        while (b <= a) {
            output = output + b;
            b++;
        }
        return output;
    }
    else if (a < b) {
        let output = 0;
        while(a <= b){
            output = output + a;
            a++;
        }
      
        return output;

    }
    }
};
// Do not edit below this line
module.exports = sumAll;
