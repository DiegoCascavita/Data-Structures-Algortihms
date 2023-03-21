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
  
  console.log(search([5,1,3], 0))
  