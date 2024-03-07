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

