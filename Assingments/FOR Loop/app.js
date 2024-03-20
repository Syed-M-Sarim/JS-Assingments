//q1

for ( var i = 1; i <= 10; i++){
    console.log("Number: " + i)
}

//q2

for (var i = 2; i <= 20; i += 2) {
    console.log("Even Numbers: " + i);
}

//q3

for (var i = 1; i <= 15; i += 2) {
    console.log("Odd Numbers: " + i);
}

//q4

var number = 5;
var factorial = 1;
for (var i = 1; i <= number; i++) {
    factorial *= i;
    console.log("Factorial: " + factorial)
}

//q5

var num = 7;
for (var i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (num * i));
}

//q6

var a = 0, b = 1, temp;
console.log(a);
console.log(b);
for (var i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}

//q7

var number = 123;
var sum = 0;
while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
console.log(sum);

//q8

var str = "hello";
var reversedStr = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr)

//q9

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

//q10

var array = [3, 7, 2, 9, 5];
var max = array[0];
for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);
