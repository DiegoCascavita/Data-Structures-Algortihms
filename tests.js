function containsDuplicate(nums){
    nums.sort((a,b)=> a - b)
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]) return true
        else return false
    }
}

console.log(containsDuplicate([1,2,3,4]))

