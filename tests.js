function miniMaxSum(arr) {
    let minSum = Infinity
    let maxSum = 0
    for (let i = 0; i < arr.length; i++) {
      let sum = 0
      for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
          sum += arr[j]
        }
      }
      if (sum < minSum) {
        minSum = sum
      }
      if (sum > maxSum) {
        maxSum = sum
      }
    }
    return `${minSum} ${maxSum}`
}
  
console.log(miniMaxSum([1, 2, 3, 4, 5]))