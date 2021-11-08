// How do you add to the start and end of an array in Javascript ?

var myArray = ["a ", "b ", "c ", "d"];

//Now, try moving lines 6 thru 9 below to 15 down (vice versa)

myArray = ["Start, " + myArray + " End"]

console.log(myArray)

myArray.push("End V2")
myArray.unshift("Start V2")

console.log(myArray);
