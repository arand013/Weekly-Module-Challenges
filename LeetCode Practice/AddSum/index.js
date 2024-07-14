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

var largestDivisibleSubset = function(nums) { 
  // Check if the input array is empty, if so return an empty array
  if(!nums.length) return []; 

  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);

  // Create a dynamic programming table to store the length and previous index of each subset
  const dp = Array.from({length:nums.length}, () => ({prev:null, len:1}));

  // Initialize variables to store the maximum length and index of the largest divisible subset
  let maxVal = 0, maxIdx = 0, result = [];

  // Iterate through the sorted array to build the dynamic programming table
  for(let i = 1; i < nums.length; i++) {
      let pre = 0;
      // Iterate through previous elements to find the largest divisible subset ending at current index
      while(pre < i) {
          // Check if current element is divisible by previous element and can extend the subset length
          if(nums[i]%nums[pre] === 0 && dp[pre].len+1 > dp[i].len) {
              // Update the dynamic programming table with the new subset length and previous index
              dp[i].len = dp[pre].len + 1;
              dp[i].prev = pre;
              // Update the maximum length and index if a larger subset is found
              if(dp[i].len > maxVal) {
                  maxVal = dp[i].len;
                  maxIdx = i;
              }
          }
          pre++;
      }
  }

  // Backtrack from the maximum index to build the largest divisible subset
  let curr = maxIdx;
  while(curr !== null) {
      result.push(nums[curr]);
      curr = dp[curr].prev;
  }

  // Return the largest divisible subset
  return result;
};