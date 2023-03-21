var search = function(nums, target) {
  let left = 0, right = nums.length - 1; 

  

  while (left <= right) {
      let mid = Math.floor((left + right) / 2); 
      if (nums[mid] === target) {
          return mid; 
      } else if (nums[mid] >= nums[left]) { // left side is sorted 
          if (target >= nums[left] && target < nums[mid]) { // target is in the left side 
              right = mid - 1; 
          } else { // target is in the right side 
              left = mid + 1; 
          }
      } else { // right side is sorted 
          if (target > nums[mid] && target <= nums[right]) { // target is in the right side  
              left = mid + 1;  
          } else { // target is in the left side  
              right = mid - 1;  
          }
      }
  }
  return -1;  
}
console.log(search([4,5,6,7,0,1,2],0))