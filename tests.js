const twoSum = (nums,target)=>{
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return false
}

console.log(twoSum([2,11,7,15],9))