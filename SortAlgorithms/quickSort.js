// the worst case is choose a bad pivot, so there is a median 3 pivot to fix that
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  }   
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))





//QUICKSORT WITH MEDIAN OF THE 1ST,LAST AND MIDDLE ELEMENT

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




  //QUICKSORT WITH RANDOM PIVOT
  //to avoid the minimum or maximum value

  function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
  
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  
  // Example usage:
  const arr = [5, 3, 8, 4, 2];
  const sortedArr = quicksort(arr);
  console.log(sortedArr); // [2, 3, 4, 5, 8]