class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1: 
            return 1 
        oneStep = 1 
        noStep = 1
        totalSteps = 0 

        for i in range(n-1): 
            totalSteps = oneStep + noStep
            noStep = oneStep
            oneStep = totalSteps
        
        return totalSteps
        
    def climbStairs(self, n: int) -> int:
            # Base case: if there is only 1 stair, return 1 way to climb
            if n == 1: 
                return 1
            # Initialize variables to store the number of ways to climb 1 and 2 steps
            oneStep = 1
            noStep = 1
            totalSteps = 0
            # Iterate from 2 to n (inclusive) to calculate the total number of ways to climb
            for i in range(n-1):
                # Calculate the total number of ways to climb by adding the previous two steps
                totalSteps = oneStep + noStep
                # Update the variables for the next iteration
                noStep = oneStep
                oneStep = totalSteps
            # Return the total number of ways to climb n stairs
            return totalSteps
            
        