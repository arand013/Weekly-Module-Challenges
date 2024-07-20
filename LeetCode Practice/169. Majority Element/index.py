def majorityElement(nums):
    temp = None
    count = 0
    for num in nums:
        if count == 0:
            temp = num
        count += (num == temp) - 1
    return temp

def majorityElement(nums):  # function to find the majority element in the list
    temp = None  # temporary variable to hold the current majority element
    count = 0  # counter to keep track of the current majority element's count
    for num in nums:  # iterate over each number in the list
        if count == 0:  # if the counter is 0, set the current number as the temp
            temp = num
        count += (num == temp) - 1  # increment the counter if the current number is the same as temp, decrement otherwise
    return temp  # return the majority element