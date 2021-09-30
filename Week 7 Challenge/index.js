//given any array of any length return the array reversed
//so this function needs to take in an array and reverse it's contents
// in the given example, 1 would replace 3, and 2 would stay in place

let arr = [100,99,98,97] //return [3,2,1] 


function revArr(arr) {
  for(let i = 0 ; i <= arr.length/2 - 1; i++) {
    temp = arr[i] 
    arr[i] = arr[arr.length -1 - i] 
    arr[arr.length - 1 - i] = temp
  }
  return arr
}

arr.reverse()

// arr = [4,3,2,1]
// i = 2 
// temp = 3
// 2 = 4
// 3 = 2