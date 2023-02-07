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
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
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


}
