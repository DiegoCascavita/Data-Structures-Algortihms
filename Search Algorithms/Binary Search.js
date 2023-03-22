//ONLY WORKS IN SORTED ARRAYS, BE SHURE TO SORT THEM !!!!!!!

const binarySearch = (arr, val) => {
    arr.sort((a,b)=>{ return a - b})
     
    let left = 0, right = arr.length - 1
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
  
      if (arr[mid] === val) return mid
      else if (arr[mid] < val) left = mid + 1
      else right = mid - 1
      
    }
  
    return -1
  }
  
 console.log(binarySearch([-1,0,3,5,9,12], 9))

//2. 2D BINARY SEARCH
// //74. Search a 2D Matrix
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

const searchMatrix = (matrix, target)=>{
  //1. iterate trough the matrix arrays (BINARY SEARCH ONLY FOR SORTED ARR !!)
  for(let i = 0; i < matrix.length; i++){
      let start = 0, end = matrix[0].length -1

      while(start <= end){
          let mid = Math.floor((start + end) / 2)
          if(matrix[i][mid] === target) return true
          else if(matrix[i][mid] < target) start = mid + 1
          else end = mid -1
      }
  }
  return false
}
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],20))

// 33. Search in Rotated Sorted Array

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
const search = (nums, target)=>{
  let start = 0, end = nums.length - 1

  while( start <= end){
      let mid = Math.floor((start + end) / 2)

      if(nums[mid] === target) return mid //return index 

      if(nums[start] <= nums[mid]){ // browse in left side 
          if(nums[start] <= target && target < nums[mid]) end = mid -1 //if target is btw start and mid
          else start = mid + 1 // else go to right
      } else { //browse in right side 
          if(nums[end] >= target && target > nums[mid]) start = mid + 1 // if taget is btw mid and end
          else end = mid -1 // else go to left
      }
  }
  return -1
}
