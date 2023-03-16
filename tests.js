const twoSum = function(numbers, target){
  for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
      if(numbers[i] + numbers[j] === target){
        return [i + 1 ,j + 1]
      }
    }
  }
  return false
}
console.log(twoSum([2,7,11,15],9))