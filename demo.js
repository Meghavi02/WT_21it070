let operator = prompt('Enter the operator(+,-,*,/):');
const num1 = parseInt(prompt('Enter the first number:'));
const num2 = parseInt(prompt('Enter the second number:'));
let result;
if(operator == '+'){
    result = num1 + num2;
}
else if(operator == '-'){
    result = num1 - num2;
}
else if(operator == '*'){
    result = num1 * num2;
}
else{
    result = num1 / num2;
}
window.alert(`Result is : ${result}`);
// console.log(`${num1} ${operator} ${num2} = ${result}`);
