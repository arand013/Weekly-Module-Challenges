// CHALLENGE QUESTION

/*
Use Conditional Logic with If Statements
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

***********************************
Pseudocode
if (condition is true) {
  statement is executed
}
***********************************

***********************************
Example
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.
***********************************

When test is called with a value of true, 
the if statement evaluates myCondition to see if it is true or not.
Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.



*/

//  TIPS & ADVICE


/*
(1) Every sentence(.) reveals more about how to solve the question.
(2) Begin by creating a console.log of the given to see and view what is happening as you progress. 
(3) push adds to an end of an array or list 
(4) shift removes the first item in  a list

*/ 


function trueOrFalse(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}


console.log(trueOrFalse(true));
trueOrFalse(true);

console.log(trueOrFalse(false));
trueOrFalse(false);


