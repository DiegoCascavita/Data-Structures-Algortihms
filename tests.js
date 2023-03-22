function threeSum(nums) {
    nums.sort((a, b) => a - b)
    const results = []
    //to avoid duplicates 
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        let k = i + 2
        // avoid duplicates for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;
            // avoid duplicates for j
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                // avoid duplicates for k
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        const sum = nums[i] + nums[j] + nums[k]
        if (sum === 0){
             results.push([nums[i], nums[j], nums[k]])
        }
    }
    return results
}
console.log(threeSum([-1,0,1,2,-1,-4]))
  
