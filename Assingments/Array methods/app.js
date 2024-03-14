//task
var fruits = []

fruits.push("Apple", "Strawberry" , "Guawa" , "Watermelon", "Kiwi")
document.write("Items: " + fruits)
document.write("<br><br>")
document.write(fruits.length)
document.write("<br><br>")
document.write(fruits[0])
document.write("<br><br>")
document.write(fruits[1])
document.write("<br><br>")
document.write(fruits[2])
document.write("<br><br>")
document.write(fruits[3])
document.write("<br><br>")
document.write(fruits[4])
document.write("<br><br>")

fruits.pop()
document.write("Items: " + fruits)
document.write("<br><br>")

fruits.shift()
document.write("Items: " + fruits)
document.write("<br><br>")

fruits.unshift("Pomegranet")
document.write("Items: " + fruits)
document.write("<br><br>")

//slice

var update =  fruits.slice(0, 1)
document.write("Items: " + update)