/**
create a counter
create a sliding window of size k
create a temp to sum all the indices in the window
sum / k = average
if average >= threshold counter ++
return counter
 */
const numOfSubarrays = (arr, k, threshold) => {
  let counter = 0;
  
  for (let i = 0; i <= arr.length - k; i++) {
    let temp = 0;  
    for (let j = i; j < i + k; j++) {
      temp += arr[j];
    } 
    let average = temp / k;
    
    if (average >= threshold) {
      counter++;
    }
  }
  return counter;
};
console.log(numOfSubarrays([2,2,2,2,5,5,5,8],3,4))
