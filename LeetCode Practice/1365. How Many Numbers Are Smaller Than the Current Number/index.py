def smallerNumbersThanCurrent(nums):
    counts = [0] * 101
    for num in nums:
        counts[num] += 1
  
    for i in range(1, len(counts)):
        counts[i] += counts[i-1]

    result = []
    for num in nums:
        if num != 0:
            result.append(counts[num-1])
        else:
            result.append(0)
    return result





def smallerNumbersThanCurrent(nums):
    # Create a count array to store the count of each number from 0 to 100
    counts = [0] * 101
    # Iterate through the input array and increment the count for each number
    for num in nums:
        counts[num] += 1
    # Iterate through the counts array and calculate the cumulative sum
    for i in range(1, len(counts)):
        counts[i] += counts[i-1]

    # Iterate through the input array and replace each number with the count of numbers smaller than it
    result = []
    for num in nums:
        if num != 0:
            result.append(counts[num-1])
        else:
            result.append(0)
    return result