/*

indices of the two numbers such that they add up to a specific target

input:   nums = [2, 11, 15, 7], target = 9
                 *          *
nums[0]+nums[3]=target

output=[0, 3]

*/


// Create function takes 2 parameters (Array, Target)
// Iterate thru the array to find the numbers 
// Return the indices of those number back as a result, in an array


function sumOfTwoNumbers(array,target) {

    let result = [];
  
  for(let i = 0; i < array.length; i++) {
    for(let j = 1 + i; j < array.length; j++) {
      //find the numbers
      
      // if (we add two & we reach the target )
      if(array[i] + array[j] === target){
  
        // push numbers to the result
        result.push[i];
        result.push[j];
      }
    }
  }
    return result; 
  }
  
  
  // input:   nums = [2, 11, 15, 7], target = 9
  /*
  1 iteration
  i j     i  j  i j
  2 11    2 15  2 + 7
  
  
  2nd iteration
  i j     i  j 
  11 15   11 7  
  
  3rd iteration
  i j   
  15 7     
  
  4th iteration
  i j   
  7 --    
  
  
  O(n^2) Time:
  O(n) Space: 
  
  N is the size of the array, if its increasing N times more then runtime increases. 
  */ 
  
// Survey DO 3-4 

//Response 4-5 