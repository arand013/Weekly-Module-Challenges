function smallerNumbersThanCurrent(nums) {
    const counts = new Array(101).fill(0);
    nums.forEach(num => counts[num]++);
    for (let i = 1; i < counts.length; i++) {
        counts[i] += counts[i-1];
    }
    const result = [];
    nums.forEach((num, index) => {
        if (num !== 0) {
            result.push(counts[num-1]);
        } else {
            result.push(0);
        }
    });
    return result;
}



function smallerNumbersThanCurrent(nums) {
    // Create a count array to store the count of each number from 0 to 100
    const counts = new Array(101).fill(0);
    // Iterate through the input array and increment the count for each number
    nums.forEach(num => counts[num]++);
    // Iterate through the counts array and calculate the cumulative sum
    for (let i = 1; i < counts.length; i++) {
        counts[i] += counts[i-1];
    }

    // Iterate through the input array and replace each number with the count of numbers smaller than it
    const result = [];
    nums.forEach((num, index) => {
        if (num !== 0) {
            result.push(counts[num-1]);
        } else {
            result.push(0);
        }
    });
    return result;
}