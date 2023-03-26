const minimumDifference = function(nums, k) {
  if(nums.length === 1) return 0 

  return nums.length - k
}
console.log(minimumDifference([90],1))

