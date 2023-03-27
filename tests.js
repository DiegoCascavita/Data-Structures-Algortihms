/*
  define the length for each of m & n
  push nums2[i] in mus1
  sort them and return
*/
const merge = function(nums1, m, nums2, n) {
  nums1.length = m
  nums2.length = n
  for( let i = 0; i < nums2.length; i++){
    nums1.push(nums2[i]) 
  }
  return nums1.sort((a,b)=> a - b)
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

