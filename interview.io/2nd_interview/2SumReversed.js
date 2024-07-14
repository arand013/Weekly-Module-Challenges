// [1,2,4,13,17,29,2] 
// find two numbers that the difference is 13, a-b=13

// Constraints: Assume all int are ( + , - ) 
// Goal, O(n) nothing over n^2

// Create function that takes an array as a parameter 
// Initialize a result to return the answer of 13
// Create a loop to iterate the array, 
// Create another loop to look for 2nd number in that array. To equal the difference of 13
// Lastly return the result 

// Is there a way to find the solution by not looking at all the #'s in the array? 

// say if we have number a(1), 
// we are looking another number for a+13(14) and a-13(-12)

// hashmap and dictionary
// key value

// set 
// only has key


// see 1, check if 1 is in the set, find nothing
// put 14 and -12 in the set set = [-12, 14]

// see 14, check if 14 is in the set, will find it.

// method 1
// what do we put in the set so we can look up later?
// A: put a+13 and a-13 in the set
// what number do we look up?
// A: look up a


// method 2
// what do we put in the set so we can look up later?
// A: put a in the set
// what number do we look up?
// A: look up a+13 and a-13


// see 1, check if 14 or -12 is in the set, find nothing
// add 1 in the set, set = [1]

// if we see -12, then we check if 1 or -25 is in the set, we will find 1


// see 2, looking 15 and -11 in set, find nothing
// pit

// what do we put in the set so we can look up later?
// A: put a+13 and a-13 in the set
// what number do we look up?
// A: look up a

// what do we put in the set so we can look up later?
// A: put a+13 and a-13 in the set
// what number do we look up?
// A: 13??


function difference(arr){
    let a = []
    let result = [a]
    // Create a set here
    for(let i = 0; i < arr.length; i++){
      // let a be arr[i] 
  
      // checks the array for a+13, a-13
  
      // Check if a = 13
  
      // If not then keep iterating through array 
      // And continue to the next number in the array, adding to the set 
  
      // Until we find a mathcin pair that is = to 13
  
      // Then return that pair. 
      if(a+13, a-13){
      
      }
      else if (a++ ){
  
      }
    }
    return result
  }
  
  
  // function difference(arr){
  //   let A be a set
  
  //   for(let i = 0; i < arr.length; i++){
  //     check if arr[i]+13 is in set A
  //     if yes, return (arr[i], arr[i]+13)
      
  //     check if arr[i]-13 is in set A
  //     if yes, return (arr[i], arr[i]-13)
  
  //     put a in the Set
     
  //   }
  //   return empty pair
  // }
  
  
  
  // i cannot hear you anymore
  // can you hear me?
  // let me refresh