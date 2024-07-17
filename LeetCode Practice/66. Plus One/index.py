from typing import List
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        num = []

        numBuilder = ""

        for i in range(len(digits)):
                numBuilder += str(digits[i])

        result = int(numBuilder) + 1
        print(result)
        resultString = str(result)

        for i in range(len(resultString)):
                num.append(int(resultString[i]))
        return num   



    def plusOne(self, digits: List[int]) -> List[int]: 
        # Initialize an empty list to store the final result
        num = []     

        # Initialize an empty string to build the number from the input digits
        numBuilder = ""

        # Convert the input digits to a single number as a string
        for i in range(len(digits)):
            numBuilder += str(digits[i])

        # Add 1 to the number and store it in the result variable
        result = int(numBuilder) + 1     

        # Print the result for debugging purposes
        print(result)     

        # Convert the result back to a string to process each digit individually
        resultString = str(result)      

        # Convert each character in the result string back to an integer and add it to the num list
        for i in range(len(resultString)):
            num.append(int(resultString[i]))

        # Return the final result as a list of integers
        return num          