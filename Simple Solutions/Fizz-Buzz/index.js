/*
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. 

For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead. ?

When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those) ? 


*/

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }

  for (let i = 1; i <= 23; i++) {
      let result = "";
      if (i % 3 == 0) result += "Click";
      if (i % 5 == 0) result += "Klack";
      console.log(result || i);
  }

// PSUEDOCODE

// 1) Create a for loop using variable ( i )
// 2) Have the loop start at 1
// 3) Iterate thru 100 numbers
// 4) Adding +1 eveytime until it hits 100
// 5) Create an empty string "" to hold the result
// 6) Close everyline with a semi-colon
// 7) Console log the result to test 100 numbers print

// 8) Create a if statement that checks if i is divsible by 3 which will turn true
// 9) Send a update change to result list equal to ( += ) "Fizz" in this case "Click"
// 10) Repeat step 8 but, change number divisible to be 5 and display "Buzz" in this case "Klack"

// 11) update and move console.log to last line, with the result and i 