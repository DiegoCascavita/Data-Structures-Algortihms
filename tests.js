// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
// ONLY WORKS ON SORTED ARRAYS

const binarySearch = (arr, val) => {

  arr.sort()

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
console.log(binarySearch([10, 15, 20, 25, 30], 15))

// WE CAN MAKE IT WITH 2 POINTERS OR SORT THE ARRAY TOO
