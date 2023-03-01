/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

	function troubleshooting() {
		const a = 1;
		const b = 1;

		let result;

		// Edit between these lines
		// =================================
		result = a + b;

		// =================================

		return result;
	}
console.log(troubleshooting());
// Do not change this 
module.exports = troubleshooting;

// ===================================================================================================
// ===================================================================================================
// ===================================================================================================


/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than 
 * or equal to 10, and false if it is less than 10
 */


	function numberChecker(number) {
		if(number >= 10) {
			return true;
		} else if (number < 10) {
			return false;
		}
	}
console.log(numberChecker(49));




// ===================================================================================================
// ===================================================================================================
// ===================================================================================================


/* Some rules first:
*   Enter the operations, replacing the `"?"`, make the computer do the work for you. 
*   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
* 
* a = one plus eight
* b = 22 times three
* c = the *remainder* of 5/4
* d = the variable 'a' minus 17
* e = the sum of the previous four variables
*/
	function variables() {

	let f = 1+8;
	let g = 22 * 3;
	let c = 5 % 4;
	let d = f - 17;
	let e = f + g + c + d;

	return console.log(f, g, c, d, e);
}
variables();

// ===================================================================================================
// ===================================================================================================
// ===================================================================================================


/*
4 variables: first name, last name, current year, and birth year.
a 5th variable (greeting) that is constructed from the previous 4, 
it should contain a greeting with the person's full name and their age.
print the greeting with console.log
*/

	const theGreeting = () => {
		// Create 4 variables
		let firstName = 'Alexander'; 
		let lastName = "Aranda";
		let currentYear = 2023;
		let birthYear = 1998;

		// 5th variable (greeting) add all 4 variables
		const greeting = "Hello my name is " + firstName + " " + lastName + ". It is the year " + currentYear + " and I was born on " + birthYear + "."


		// return console.log of 5th
		return console.log(greeting)
	}
theGreeting()


// ===================================================================================================
// ===================================================================================================
// ===================================================================================================

/*
Write a function called add7 that takes one number and returns that number + 7?
*/
	function add7(x) {
		let add =  parseInt(x)+ 7

		return console.log(add)
 }
 
// ANSWERS
add7("X")
add7("20")
add7(1)

/*
Write a function called multiply that takes 2 numbers and returns their product?
*/
function multiply( x , y ) {
	let mutiplyIt = x * y
	return console.log(mutiplyIt)
}
// ANSWERS
parseInt(multiply("c", 10))
parseInt(multiply(10, 10)) 

/*
Write a function called capitalize that takes a string and 
returns that string with only the first letter capitalized. 

Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.?
*/

function capitalize( x, y ) {

	const string1 = x.charAt(0).toUpperCase();
	const string2 = x.slice(1);
	const both = string1 + string2;

	return console.log(both)
}
capitalize("first");


/*
Write a function called lastLetter that takes a string and 
returns the very last letter of that string:

Ex: lastLetter("abcd") should return "d"
*/

function lastLetter(word){
	let slicedLetter = word.slice(-1);
	console.log(slicedLetter);
	return slicedLetter;
}
 lastLetter("giveN");

// Write a funtion then change tht function into a shorter version using ( ? )  operator &  ( : )  
// ex: ( (if statement) ? ( 1st value ) : ( or 2nd value ) )

function verifyAge(age){
	if( age > 18) {
		return true
	} else return alert("Age must be between"); 
}
function checkAge(age) {
	return (age  > 18) ? true : "Sorry your not old enough";
}

console.log(checkAge(19));
console.log(checkAge(10));


// ===================================================================================================
// ===================================================================================================
// ===================================================================================================

// Create Functions below. 
// helloWorld (This exercise is intentionally very simple to ensure that you have set up everything properly!)
function helloWorld(){
	const hello = "Welcome to Your World";
	return hello
}
console.log(helloWorld())

function repeatString(word, times ) {

	if( times < 0) return 'ERROR'

	let string = ''; 
	for( let i = 0; i < times; i++){
		string += word;
	}
	return string
}
console.log(repeatString("Keep Pushing & LETS FCKIN WIN ! !", 3))
// repeatString
// reverseString

function reverserString(string){

	let newString = ""; 
	for(let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}

	return newString;
}
console.log(reverserString("BananaBoy"));


// removeFromArray
// Implement a function that takes an array and 
// some other arguments then removes the other arguments from that array:

function removeFromArray(array, ...args) {
	let newArray = [];

	//forEach to iterare any given array
	array.forEach((item) => {

		// push every element into the new array
		// UNLESS it is included in the function arguments
		// so we create a new array with every item, except those that should be removed
		if(!args.includes(item)){
			newArray.push(item);
		}
	})
  	// and return that array
	return newArray; 
}

// sumAll
// Implement a function that takes 2 integers and 
// returns the sum of every number between(and including) them:
function sumAll(min, max) {
	if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

	if(min < 0 || max < 0 ) return "ERROR";
	if(min > max) {
		const temp = min;
		min = max;
		max = temp; 
	}

	let sum = 0;
	for(let i = min; i < max + 1; i++){
		sum += 1;;
	}
	return sum;
}
console.log(sumAll(4, 5))

// leapYears

/*
Create a function that determines whether or not a given year 
is a leap year. Leap years are determined by the following rules:

Hint: use an if statement and && to make sure all the conditions are met properly
*/

function leapYear (){

}
// tempConversion