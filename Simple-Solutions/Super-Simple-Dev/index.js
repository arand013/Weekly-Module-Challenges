// Section 3 
// Change the value of the todo1 variable to a number (e.g. 99) 
// and run typeof todo1. What is the type?

let todo = 80;
console.log(typeof todo);


// 1) Create 3 variables: month, dayOfMonth, year. 
// Use these variables to console.log today's date in 
// one line in this format: "November 9, 2021"

let month = "February";
let dayOfMonth = "4,";
let year = "2022"

console.log(month, dayOfMonth, year);


// 2) Save the result of 4 + 5 * 3 in a variable 
// and console.log the result. Do the same with 
// the result of (4 + 5) * 3. Notice the rules of math 
// are the same in programming (brackets first, then multiply, then add).

let maths = (4 + 5 * 3);
let maths2 = (4 + 5) * 3;

console.log(maths, maths2);

/* 3) Create a variable age that saves your age (e.g. let age = 25;). 
*  Create another variable: let message = 'I am ' + age + ' years old'; 
*  What is the type of the message variable?
*/

let age = 23
let days = ' with 63 days old'
let message = "I am " + age + ' years' + days;
console.log(message);

// 4) Use Javascript to add a button 
// containing the text "Click Me" inside the button.

// let button = document.createElement('button');
// button.inntertext = 'Click me! plz';
// doucment.body.appendChild(button);

// 5)Create a function named greeting that takes 
// 1 parameter firstName and uses it to console.log a message saying "hello".

function greeting(firstName) {
    console.log('Hello ' + firstName);

}
greeting("Amazing Person!");
// 6) Write a function named toUpper that converts 1 string parameter (str)
//    to uppercase and console.log the result. Use Google to find the code for 
//    converting a string to uppercase in Javascript.

function toUpper(thisString) {
    // to upper case whole word
    console.log(thisString.toUpperCase());

    // to upper case the 1st letter Only
    console.log(thisString.charAt(0).toUpperCase() + thisString.slice(1));
}
toUpper('simon'); 

/* 7) Write a function that converts a parameter length from inches to centimeters.
*/ 
    function inchToCentimeters(length){
         console.log( length * 2.54);
    }
    inchToCentimeters(5);

/* 8) Write a function toUpper that takes 1 parameter, 
an array of strings, and console.logs a new array with 
all the strings capitalized. (Hint: create a new array and push onto 
the array. Use google to learn the code for converting a string to 
uppercase in Javascript.

Example: toUpper(['hello', 'world']); will console.log(['HELLO', 'WORLD'])
*/

    function toUpperAll(strings){ 
        let result = [];

        for(let i = 0; i < strings.length; i++){
       
            result.push(strings.toUpperCase());
        };
        console.log(result);
    };
    return toUpperAll('nasty','hello');
    

/*
Write a function cartTotal that takes an array of objects cartArray 
where each object contains a name, price, and quantity. 
console.log the total price of the items in the cart. For example:
EX 1: 

cartTotal([
  { name: 'Apple', price: 4, quantity: 2 },
  { name: 'Orange', price: 3, quantity: 3 }
]);

*/

function cartTotal ( cartArray ) { 
    let cartArray = 0; 

    cartArray = map(function (item) {
        total = total + item.price * item.quantity;
      });
    
      console.log(total);
    
    cartTotal([
      { name: 'Apple', price: 4, quantity: 2 },
      { name: 'Orange', price: 3, quantity: 3 }
    ]);
}; 