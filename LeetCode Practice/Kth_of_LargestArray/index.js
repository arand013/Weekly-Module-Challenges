/* 
Given an array of integers and a number K, 
find the Kth largest value in the array.


Input: Array of integers and an Integer
Output: Integer

Input: [3, 1, 6, 4, 9, 8], 3     =>	Output: 6
Input: [1, 9, 5, 3], 1		=>	Output: 9

Time Complexity: Average O(N), Worst O(N^2)

Auxiliary Space Complexity: Worst O(1)
Total Space Complexity: Average O(log(N)), Worst O(N)


Understand :
Edge cases: 
K = not in array return -1
*K = is bigger than array return -1

K = only to 1 integer return 1 


1: Create a function 
2: initlize variables such as 
input of the array ( K )

3: Search for the Kth in the array 

4: Sort array backwards from largest to smallest value integers

5: Traverse backwards array 

6: to Find K value position 

7: Return it the value

Diagram: 



Input: [3, 1, 6, 4, 9, 8], 3     =>	Output: 6

9 ,8, 6 ,4, 3, 1


Input: [1, 9, 5, 3], 1		=>	Output: 9

9 5 3 1


Psuedocode: 

1, 3, 4, 6, 8, 9 //quick sort O(n log n)

6- 3 = 3 //6
6-1= 5 // 9
arr.length - k; //6


*/

function kValue(k, arr) {

    let start = 0
    let end = arr.length - 1




}
return kValue();