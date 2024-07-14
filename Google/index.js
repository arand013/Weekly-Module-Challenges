// Presented by : Brian McKee  & Mikhail Sushkov

// Write a function to detect if a string conatining paranthesis is balances

//  Balanced: (()) , ()(()())

//Un Balanced ((), )

/////----------------------------------------------------------------

//Definition 1 
// Build a definition of what is balances mean? 
// Balanced (()) , ()(()())   || Un Balanced (() ))

//Definition 2 
// Build a definition of what is balances mean? 
// Balanced (()) , ()(()())   
//- Balanced has equal number of opens ( and closes )

//Iterating left to right there are never more closes than opens
// ) (()) ())


// Naive solution 

// function is_balanced_string(input) {
//     for each character in input: 
//     if more closes than opend so far 
//     return false

//     if conunt closes th = count of opens inreturn tru 
//     return false
// }






// let input = "()"

// function balancedString(input) { 

//     let count = 0;
//     let answer = 0;
    
//         for (let i = 0; i < input.length; i++){
//             if (input[i] == "(") {
//                  count ++ 
//              } else {   
//                  count -- 
//             }

//             if(count === 0) {
//                 return answer++
//             }
//         }
//     return answer;
// }

// console.log(balancedString("() ) )"))

// console.log(balancedString("() (())  () "))



function  aBalancedStringCheck(string) {
    let container = []; 

    for(let i = 0; i < string.length; i++) {
        if (string[i] ==  "(") {
            container.push(string[i]);
        } else if (string[i] == ")") {
            if(container.at(-1) === "(") container.pop();
            else container.push("#")
        }
    }
    return container.length;
}

console.log(aBalancedStringCheck("() (())))))  () "))
console.log(aBalancedStringCheck('()'));


 // Write a function to detect if a string conatining paranthesis is balance? ``\\
function checkParentheses(str) {
    let brackets = [];
    for (let i = 0; i < str.length; i++) {     
        if (str[i] === "(") {
            brackets.push(str[i]);
        } else if (str[i] === ")") {
            if (brackets.at(-1) === "(") brackets.pop();
            else brackets.push("#");
        }
    }
    return brackets.length;
}

console.log(checkParentheses('()'));

