//ONLY WORKS IN SORTED ARRAYS, BE SHURE TO SORT THEM !!!!!!!

const binarySearch = (arr, val) => {
    console.log(arr)
    let left = 0
    let right = arr.length - 1
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
  
      if (arr[mid] === val) {
        return mid
      } else if (arr[mid] < val) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  
    return -1
  }
  
  console.log(binarySearch([10, 5, 20, 6, 3], 15))

