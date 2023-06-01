
// --------------------------TWO POINTERS
// Write a f(x) called sumZero which accepts a sorted array of integers. this function have to find a pair that summed is equal to 0, and return this pair
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]]
      }
    }
  }
}
console.log(sumZero([3,1,2,-3,4,5]))

// other solution //HAVE POSIBLE PROBLEMS
function sumZero2(arr){
  let left = 0
  let right = arr.length -1
  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === 0){
      return [arr[left], arr[right]]
    } else if (sum > 0){
      right --
    } else {
      left ++
    }
  }
}
console.log(sumZero2([3,1,2,-3,4,5]))

//write a function which accpets a sorted array, and counts the unique values in the array, negative too. 
function countUniqueValues(arr) {
  let count = 0;
  let i = 0;
  while (i < arr.length) {
    count++;
    let j = i + 1;
    while (j < arr.length && arr[i] === arr[j]) {
      j++;
    }
    i = j;
  }
  return count;
}
console.log(countUniqueValues([1,1,1,1,1,2]))
//refactored
function countUniqueValues2(arr){
  let i = 0
  for(var j =1; j < arr.length; j++){
    if(arr[i] != arr[j]){
      i ++
      arr[i] = arr[j]
    }
  }
}
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates(1,2,4,3,4))
// My aproach
function duplicates(...args){
  args.sort()

  let i = 0
  for (let j = 1; i < args.length; j++){
    if(args[i] === args[j]){
      return true
    }
    i ++
  }
  return false
}
console.log(duplicates(1,2,3,3))

//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(arr,num){

  if(arr.length === 0){
    return false
  }

  let i = 0
  for(j = 1; j < arr.length; j++){
    if((arr[i] + arr[j]) / 2 === num){
      return true
    }
    i ++
  }
  return false
}
console.log(averagePair([],4))
//at the end and at the beginning pointer
function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;

    if (avg === num) {
      return true;
    } else if (avg < num) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
console.log(averagePair([],4))