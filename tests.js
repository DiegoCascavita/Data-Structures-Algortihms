function quicksort_median3(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Choose pivot as the median of the first, middle, and last element
    const mid = Math.floor(arr.length / 2);
    const first = arr[0];
    const last = arr[arr.length - 1];
    const pivot = [first, arr[mid], last].sort((a, b) => a - b)[1];
  
    // Partition the array
    const left = [];
    const right = [];
    const equal = [];
    for (let i = 0; i < arr.length; i++) {
      const x = arr[i];
      if (x < pivot) {
        left.push(x);
      } else if (x > pivot) {
        right.push(x);
      } else {
        equal.push(x);
      }
    }
  
    // Recursively sort the left and right partitions
    const sortedLeft = quicksort_median3(left);
    const sortedRight = quicksort_median3(right);
  
    // Combine the sorted partitions with the pivot element
    return sortedLeft.concat(equal, sortedRight);
  }
  