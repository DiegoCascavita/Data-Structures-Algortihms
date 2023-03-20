// **Binary search in each row - O(mlog n)**
var searchMatrix1 = function(matrix, target) {
  for(let i = 0; i < matrix.length; i++) {
      let start = 0, end = matrix[0].length - 1

      while(start <= end) {
          let mid = Math.floor((start + end) / 2)
          if(matrix[i][mid] === target) return true
          
          if(matrix[i][mid] > target) end = mid - 1
          else start = mid + 1
      }
  }
  return false
}
console.log(searchMatrix1([[1,3,5,7],[10,11,16,20],[23,30,34,60]],20))

const searchMatrix = (matrix, target) => {   
  //1. iterate trough the matrix arrays
  for(let i = 0; i < matrix.length; i++){
    let start = 0, end = matrix[0].length - 1

      while(start <= end){
        let mid = Math.floor((start + end) / 2)
          if(matrix[i][mid] === target) return true
          else if(matrix[i][mid] < target) start = mid + 1
          else end = mid - 1
      }
  }
  return false
}
