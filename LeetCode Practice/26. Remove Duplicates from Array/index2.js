function removeDuplicates(nums){

    let result = []
    let count = 1

    for(let i = 0; i < nums.length; i++){
        if( nums[i] !== nums[count - 1] ){
            result.push(nums[count] = nums[i])
        }
``
    }
    return result;  
}

console.log(removeDuplicates([1,1,3,3]))``