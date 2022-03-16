//split string by " ";
//replace operands by "",
function calculator(string) {
    if (string === '' || string === " " || string === "     ") throw new Error("Cannot be an empty string");
    if (string.length <= 3 || string[2] == "%") throw new Error("Must have two values");
    let operator = string.split(" ");
    
  
    
    if ((checkDigit(operator[0]) == true && (checkDigit(operator[2])) == true)) {
        if (operator[0] > 10 || operator[0] <= 0) throw new Error("Numbers should be between  1 and 10");
        if (operator[2] > 10 || operator[2] <= 0) throw new Error("Numbers should be between 1 and 10");
        
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
    else if (!checkDigit(operator[0]) && !checkDigit(operator[2])) {
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
            if (first > 10 || first <= 0) throw new Error("NUmbers should be between 1 and 10");
            if (second > 10 || second <= 0) throw new Error("NUmbers should be between 1 and 10 ");
            if (operand == "+") output = first + second;
            else if (operand == "-") output = first - second;
            else if (operand == "*") output = first * second;
            else if (operand == "/") output = first / second;
           
            
            //convert back to roman
            let roundedBeforeConversion = Math.floor(output);
            if (roundedBeforeConversion == 0) return "";
            let backToRoman = convertToRoman(roundedBeforeConversion);
            
  
  
            return backToRoman;
    }
    
  
  } 
  console.log(calculator("0 + 1"));
  
  
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
  
  
  
  
  
  
  
  function checkDigit(string) {
    let isNum = /^\d+$/.test(string);
    return (isNum)
    
  }
    
