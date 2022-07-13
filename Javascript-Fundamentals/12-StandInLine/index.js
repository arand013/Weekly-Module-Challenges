// CHALLENGE QUESTION

/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.


*/

//  TIPS & ADVICE


/*
(1) Every sentence(.) reveals more about how to solve the question.
(2) Begin by creating a console.log of the given to see and view what is happening as you progress. 
(3) push adds to an end of an array or list 
(4) shift removes the first item in  a list

*/ 

// GIVEN

function nextInLine(arr, item) {

  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
