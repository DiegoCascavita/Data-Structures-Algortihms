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
