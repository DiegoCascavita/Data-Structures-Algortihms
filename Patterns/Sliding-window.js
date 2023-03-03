//write a function called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum1(arr,num){
    if( num > arr.length){
        return null
    }
    let max = -Infinity
    for( let i = 0 ; i < arr.length - num + 1; i++){
        let temp = 0
        for(let j = 0; j < num; j++){
            temp += arr[i + j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
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
