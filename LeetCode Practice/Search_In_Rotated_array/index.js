/* 
Sorted & Rotated Array Search

Given a rotated, sorted array and a target value, return the index of the target value. If the target value does not exist inside of the collection, return -1.

A rotated, sorted array means that some number of elements have been taken from one end of the array and moved to the other end while maintaining the sorted status of the moved elements: [1,2,3,4,5,6,7] → [3,4,5,6,7,1,2].

Assumptions: You can assume all elements are unique and there will no duplicate values.

Input: Array of integers, target value
Output: Integer index of target value (-1 if not found)
Example
Input: [6,8,11,15,17,3,5], 3      	=>	Output: 5
Input: [6,8,11,15,17,3,5], 10		=>	Output: -1
Constraints
Time Complexity: O(log(N))
Auxiliary Space Complexity: O(1)
*/ 


function searchRotatedSortedArray(arr, target) {
    let start = 0;
    let end = arr.length;
    let mid;
    // Modified Binary Search
    while(start < end) {
      mid = Math.floor((start + end)/2);
  
      if(arr[mid] === target) {
        return mid;
      }
  
      if(arr[start] < arr[mid]) { // Left Half is the closed range
        if(target >= arr[start] && target <= arr[mid]) { //Target is in closed range
          end = mid;
        } else { //Target is in open range
          start = mid;
        }
      } else { //Left Half is the open range
        if(target >= arr[start] || target <= arr[mid]) { //Target is in open range
          end = mid;
        } else { //Target is in closed range
          start = mid;
        }
      }
    }
    return -1; //Didn't find the target
  }
  
  searchRotatedSortedArray([4,5,6,7,8,9,10,11,15,3], 15)