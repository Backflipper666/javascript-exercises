const asIs = function (string) {
    //take string, remove punctuations, make lowercase
    //take string backwards, remove punctuation, make lowercase
    //compare them
    //split long string by space and compare them
    //omit "!", "?", ".", ","
    let strArray = string.split("");
        for (let i = 0; i < strArray.length; i++) {
            if ("!" === strArray[i]) {
                strArray.splice(i, 1);
            }
        }
        let stringJoined = strArray.join("");
    return stringJoined.toLowerCase();
};




function reverseString(string) {
    let output = "";
    for (let i = string.length - 1; i >= 0; i--){
        output += string[i];
    }
    let lowerCased = output.toLowerCase();
    return removePunctuation(lowerCased);
}



function removePunctuation(string) {
    let myArray = string.split("");
    for (let i = 0; i < myArray.length; i++) {
        if ("!" === myArray[i] || "?" === myArray[i] || "." == myArray[i]) {
            myArray.splice(i, 1);
        }
    }
    let strJoined = myArray.join("");

    return strJoined;
}

const palindromes = function(string) {
    if (asIs(string) === reverseString(string)) return true;
    else {
        return false;
    }
}
        
     

// Do not edit below this line
module.exports = palindromes;
