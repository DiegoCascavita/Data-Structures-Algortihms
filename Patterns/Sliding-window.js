/*In this example, we have an array of numbers arr and a window size k. The goal is to find the maximum sum of any subarray of k elements in the array.
*/

function slidingWindow(arr, k) {
  let maxSum = 0
  // Loop through the array until left pointer have enough space "k"
  for (let i = 0; i <= arr.length - k; i++){ 
    let windowSum = 0; // Initialize a variable to store the window sum

    for (let j = i; j < i + k; j++) { // Loop "j" since "i" up to "k"
      windowSum += arr[j]; // Add the current element to the window sum
    }
    maxSum = Math.max(maxSum, windowSum); // Update the maximum sum
  }

  return maxSum;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
console.log(slidingWindow(arr, k)); // Output: 27

/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 Examples:*/

// 1. minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// 2. minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray

function minSubArrayLen(arr,val){
  
  let start = 0
  let end = 0
  let sum = 0
  let minLength = Infinity
  // 1. set up a sliding window that make a subarray 
  while(start < arr.length){
    if(sum < val && end < arr.length){
      sum +=  arr[end]
      end++
    }
    // If the current subarray sum is greater than or equal to val, shrink the window
    else if(sum >= val){
      minLength = Math.min(minLength, end - start)
      sum -= arr[start]
      start ++
      /*Si la suma actual de la submatriz es mayor o igual a val,    actualiza minLength para que sea el mínimo entre el valor actual de minLength y la longitud de la submatriz actual (end - start).
      Luego resta el valor en el índice start de sum e incrementa start para reducir la ventana desde la izquierda.*/
    }
    // If we've reached the end of the array and can't expand the window any further
    else {
      break
    }
  }
  // If isn't any that means that is = infinity and return 0
  return minLength === Infinity ? 0 : minLength
  //otherwise return minLength
}
console.log(minSubArrayLen([2,3,1,2,4,3], 7)
)

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

//write a function called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i=0; i<num; i++){
     total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }
  return total;
}
console.log(maxSubarraySum1([4,2,1,6],1))
console.log(maxSubarraySum1([4,2,1,6,2],4))

//Refactorized
function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3))

/**maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.**/

maxSubarraySum3([100,200,300,400], 2) // 700
maxSubarraySum3([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum3([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum3([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum3([2,3], 3) // null

function maxSubarraySum3(arr,num){
  if(num > arr.length){
    return null
  }
  let maxSum = 0
  let tempSum = 0

  for( let i = 0; i < num; i++){
    maxSum += arr[i]
  }
  tempSum = maxSum
  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
} 
console.log(maxSubarraySum3([100,200,300,400], 2))
/*Este bucle comienza desde el índice num, ya que ya hemos calculado la suma del primer subarreglo de longitud num en el bucle anterior. Continúa hasta el final del arreglo arr.length.
En cada iteración del bucle, la variable tempSum se actualiza para reflejar la suma del subarreglo actual de longitud num. Restamos el primer elemento del subarreglo anterior (que es arr[i - num]) y agregamos el siguiente elemento (que es arr[i]). Esto "desliza" efectivamente el subarreglo hacia la derecha en una posición.*/

