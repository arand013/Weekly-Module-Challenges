/* 
QUESTION 

Q: Two friends Anna and Brian, are deciding how to split the bill at a dinner. 
Each will only pay for the items they consume. 
Brian gets the check and calculates Anna's portion. 
You must determine if his calculation is correct.

For example, assume the bill has the following prices: .
Anna declines to eat item  which costs .
 If Brian calculates the bill correctly, Anna will pay . 
 If he includes the cost of , he will calculate . 
 In the second case, he should refund  to Anna.
----------------------------------------------------------------
Function Description

Complete the bonAppetit function in the editor below. 
It should print Bon Appetit if the bill is fairly split. 
Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

- bill: an array of integers representing the cost of each item ordered
- k: an integer representing the zero-based index of the item Anna doesn't eat
- b: the amount of money that Anna contributed to the bill
----------------------------------------------------------------
Input Format
The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat.
The second line contains  space-separated integers  where .
The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill.

----------------------------------------------------------------
Constraints

The amount of money due Anna will always be an integer
Output Format

If Brian did not overcharge Anna, print Bon Appetit on a new line; 
otherwise, print the difference (i.e., ) that Brian must refund to Anna. 
This will always be an integer.

----------------------------------------------------------------
EXAMPLES


*/ 









'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}











// UNDERSTAND
/*
1. 2 friends are splitting a bill (input a bill with items from a list , bill, )
2. Brian will pay bill but Anna will contribute half (input , k , )
3. Given what Anna did not eat, then calculate if Anna overpaid or paid an equal amount; 
4. Return the change to her or 'Bon Apetit' if its was an equal amount



// DIAGRAM 

Example 1:                           Example 2:                 
Input: 3 10 2 9                      Input: 3 10 2 9                 
       12  (Sarah contribution)   
Output: 5                            Output: 7  

// PSUEDOCODE

1) Define function and parameters 
2) Initiate variables
3) Begin Iteration Loop / Math caculations
4) return the function call

*/




/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill | A list 
 *  2. INTEGER k | the number of items ordered and the -based index 
 *  3. INTEGER b | the amount of money that Brian charged Anna for her share of the bill.


 */

function bonAppetit(bill, k, b) {
    bill[k] = 0;

    let reducer=(accumulator,currentValue)=> accumulator+currentValue;

    let annaExpectedBill = bill.reduce(reducer)/2;

    if(b == annaExpectedBill) {
        console.log("Bon Appetit");
    }
    else{ console.log(b-annaExpectedBill)
    }
};














function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
