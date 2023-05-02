/**
keep track of the var 
if nums[i] === nums[i] + 1 erase
only keep unique numbers 
return k, arr
 */
var removeDuplicates = function(nums) {
    let k = 0

    for(let i = 0; i < nums.length; i ++){
        if(nums[i] !== nums[k]){
            k++
            nums[k] = nums[i]
        }
    }
    return k + 1
};