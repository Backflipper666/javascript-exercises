
function calculator(string) {
    const noWsStr = string.replace(/\s/g, '');
    const operators = noWsStr.replace(/[\d.,]/g, '').split('');
    const operands = noWsStr.replace(/[+/%*-]/g, ' ')
                            .replace(/\,/g, '.')
                            .split(' ')
                            .map(parseFloat)
                            .filter(it => it);

    if (operators.length >= operands.length){
        throw new Error('Operators qty must be lesser than operands qty')
    };

    while (operators.includes('*')) {
        let opIndex = operators.indexOf('*');
        operands.splice(opIndex, 2, operands[opIndex] * operands[opIndex + 1]);
        operators.splice(opIndex, 1);
    };
    while (operators.includes('/')) {
        let opIndex = operators.indexOf('/');
        operands.splice(opIndex, 2, operands[opIndex] / operands[opIndex + 1]);
        operators.splice(opIndex, 1);
    };
    while (operators.includes('%')) {
        let opIndex = operators.indexOf('%');
        operands.splice(opIndex, 2, operands[opIndex] % operands[opIndex + 1]);
        operators.splice(opIndex, 1);
    };

    let result = operands[0];
    for (let i = 0; i < operators.length; i++) {
        operators[i] === '+' ? (result += operands[i + 1]) : (result -= operands[i + 1])
    }
    let rounded = Math.floor(result);
    let resultConverted = rounded.toString();
    return resultConverted;
}

function convertToRoman(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}
        

function roman_to_Int(str1) {
    if(str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    var pre, curr;

    for(var i = 1; i < str1.length; i++){
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
    }

    return num;
    }

    function char_to_int(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
}




//split string by " ";
//replace operands by "",
function romanStringToInt(roman) {
    let operator = roman.split(" ");
    
    let container = [];
    let operand = "";
    for (let i = 0; i < operator.length; i++) {
        if (operator[i] == "+" || operator[i] == "-" || operator[i] == "/" || operator[i] == "*") operand = operator[i]; 
        if (operator[i] !== "+" && operator[i] !== "-" && operator[i] !== "/" && operator[i] !== "*") {
            
            container.push(roman_to_Int(operator[i]));
            
        }
    }
    container.push(operand);
    

    //calculate
    let first = container[0];
    let second = container[1];
    let output = '';
    if (operand == "+") output = first + second;
    else if (operand == "-") output = first - second;
    else if (operand == "*") output = first * second;
    else if (operand == "/") output = first / second;
    
    //convert back to roman
    let backToRoman = convertToRoman(output);
    console.log(backToRoman);


    return container;

} 
romanStringToInt("XX + I");
