function calculator(string) {
    // код пишите внутри этой функции
              let output = "";
             
              let operator = string[2];
              let firstOperand = parseInt(string[0]);
              let secOperand = parseInt(string[4]);
              if (operator === "+") {

                  output = firstOperand + secOperand;
                  return ((output.toString()));
              }
              else if (operator === "-") {
                output = firstOperand - secOperand;
                output = output.toString();
                return output;
              }
              else if (operator === "*") {
                  output = firstOperand * secOperand;
                  output = output.toString();
                  return output;
              }
              else if (operator === "/") {
                  output = firstOperand / secOperand;
                  output = output.toString();
                  return output;
              }

  
             
    
  }
  console.log(calculator("3 - 1"));
  console.log(typeof(output));
  
  module.exports = calculator; // Не трогайте эту строчку