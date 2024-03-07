//q1

var input1 = "AZ"
var imput2 = "az"

if (input1 === "az" && imput2 === "AZ" ){
    document.write("<h2>Passed</h2>")
}
else{
    document.write("<h2>Failed</h2>")
}

//q2

var value1 = +prompt("Enter value: ")
var value2 = +prompt("Enter value: ")

if (value1 >= value2){
    document.write("This value is greater: 90" + value1)
    document.write("<br>")
}
else{
    document.write("This value is greater: " + value2)
    document.write("<br>")
}

//q3 

var data = +prompt("Enter number: ")

if (data <= 0 ){
    document.write("Negative")
    document.write("<br>")
}
else{
    document.write("Positive")
    document.write("<br>")
}

//q4

var word = prompt("Enter Alphabet")
var vowel = prompt("A", "E", "I", "O", "U")

if (word == vowel){
    document.write("Matched")
    document.write("<br>")
}
else{
    document.write("Not matched")
    document.write("<br>")
}

//q5

var password = "Hello"
var check = prompt("Enter Password")

if (check == password){
    document.write("Correct Password")
    document.write("<br>")
}
else{
    document.write("Retry")
    document.write("<br>")
}


