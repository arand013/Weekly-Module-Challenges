class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {

        int[] counts = new int[101];
        for(int num : nums) counts[num]++;
        for(int i = 1; i < counts.length; i++) counts[i] += counts[i-1];

        for(int i = 0; i < nums.length; i++){
            if(nums[i] != 0){
                nums[i] = counts[nums[i] - 1];
            }
        }
        return nums; 
    }
}

class SolutionWComments {
public int[] smallerNumbersThanCurrent(int[] nums) {
    // Create an array to store the count of each number from 0 to 100
    int[] counts = new int[101];
    // Iterate through the input array and increment the count for each number
    for(int num : nums) counts[num]++;
    // Iterate through the counts array and calculate the cumulative sum
    for(int i = 1; i < counts.length; i++) counts[i] += counts[i-1];

    // Iterate through the input array and replace each number with the count of numbers smaller than it
    for(int i = 0; i < nums.length; i++){
        // Skip the first element (0) as it has no smaller numbers
        if(nums[i] != 0){
            // Replace the current number with the count of numbers smaller than it
            nums[i] = counts[nums[i] - 1];
        }
    }
    // Return the modified array
    return nums; 
    }   
}