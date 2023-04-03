/*
make a sliding window up to k
iterate over the array
if [i] === [j] return true
else false
*/
function containsNearbyDuplicate(nums, k) {

  for(let i = 0; i < nums.length; i++){
      // only check up to k
      for(let j = i + 1; j <= i + k && j < nums.length; j++){
          if(nums[i] === nums[j]) return true
      }
  }   
  return false
}
console.log(containsNearbyDuplicate([99,99],3))
// console.log(containsNearbyDuplicate([1,2,3,1],3))
// console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))