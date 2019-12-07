var num1 = +prompt('Введите любое число');
var num2 = +prompt('Введите еще одно число');

var plus = (num1 + " + " + num2 + " = "+ (parseFloat(num1) + (parseFloat(num2))));
var minus = (num1 + " - " + num2 + " = " + (parseFloat(num1) - parseFloat(num2)));
var multiply = (num1 + " * " + num2 + " = " + (parseFloat(num1) * parseFloat(num2)));
var devide = (num1 + " / " + num2 + " = " + (parseFloat(num1) / parseFloat(num2)));
alert(plus + ',\n ' + minus + ",\n" + multiply + ",\n" + devide);
