const twoSum = (nums,target)=>{
  for(let i = 0; i < nums.length; i++){
    for(let j = 1; i = nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return false
}

console.log(twoSum([2,7,11,15],9))