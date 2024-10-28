function twoSum(nums, target){

   let result = [];

   for(let i = 0; i < nums.length; i++ ){

    for(let j = i +1; j < nums.length; j++){
        let addition = nums[i] + nums[j];

        if (addition === target){
            result.push(nums[i])
            result.push(nums[j])
        }

    }
   }

   return result; 
   
 }

 console.log(twoSum([1,2,4], 3))
 console.log(twoSum([1,7,10,20,50,110, 47, 25], 72))