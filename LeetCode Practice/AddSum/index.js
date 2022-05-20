const obj = {
    pts_a: 12.1,
    hello: 'world',
    pts_b: "500",
    num: 300,
    nothing: undefined,
    pts_c: 5,
    blob: {},
    list: [],
    not_pts_a: 100,
    pts_d: 20
}

// Return 437

// Write a function that takes an OBJ that is processed and
// lookes for the keys that have values that are number and
// returns the sum of all the numbers

// Understand
/* 
1)Start with a function, w/ parameters (obj) as numbers or integers 
2)Create to hold the values of numnbers 
3)Write a loop to look for key values and add that to the 
4)Return the Sum 

Lastly Begin a test.

*/
// Diagram 

/*

const obj = {
    pts_a: 12.1,
    hello: 'world',
    pts_b: "500",
    not_pts_a: 100,
    pts_d: 20

}
return 132.1
*/


// Psudedocode

// Conststraints: 
// NO String, NO Booleans,  

// Code
function addSum() {

    const arr = [1,2,3,4,5];

    const arrSum = arr => arr.reduce((a,b) => a + b, 0)

const  getSum = (arr)=>{
    let sum = 0;
    for(key of arr){
      sum += key
    }
    return sum
  }

};

console.log(addSum());




//Write function 


// What is .length parameter of an object


//Write a test (obj is test object)

