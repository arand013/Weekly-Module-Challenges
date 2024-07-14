from typing import List
class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        
        for i in range(len(arr)): 
            for j in range (i + 1, len(arr)):
                if((arr[i] == 2 * arr[j]) or (arr[i] == arr[j]/2)):
                    return True
        return False
    
class SolutionWComments:
    def checkIfExist(self, arr: List[int]) -> bool:
        # Iterate through each element in the array
        for i in range(len(arr)): 
            # Iterate through each element that comes after the current element
            for j in range (i + 1, len(arr)):
                # Check if the current element is twice the next element or the next element divided by 2
                if((arr[i] == 2 * arr[j]) or (arr[i] == arr[j]/2)):
                    # If a match is found, return True
                    return True
        # If no match is found after iterating through the entire array, return False
        return False