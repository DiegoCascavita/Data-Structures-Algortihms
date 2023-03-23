
/* Palindrome Number
Given an integer x, return true if x is a 
palindrome (atras y adelante se leen igual)
, and false otherwise.*/
var isPalindrome = function(x) { //1.declaramos una f(x)
    return x.toLowerCase() ===   //2. return a string IN LOWCASE ===
    x.toLowerCase()
    .split('')                  //3. split in letters
    .reverse()                   //4. reverse
    .join('');                   //5. join letters
};
// console.log(isPalindrome('OSo'))
// --------------------------------------------------------------------
/* Roman to Integer*/
function romanToInt(str){
    // Define an object that maps Roman numerals to integers
    const map = {  
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;                  //1.initialize iterator
    for(i = 0; i < str.length; i++){ //2.setup iterator
        const current = map[str[i]]; //3. define current number
        const next = map[str[i+1]];  //4. define next number
    if(current < next){              //5. if current < next, subtract next - current and iterate
        result += next - current;
        i++;
    } else {                         //6.otherwise concatenate current
        result += current;
    }
}
    return result;
}
//console.log(romanToInt('MCDLXIII'))
// --------------------------------------------------------
/* Longest Common Prefix

Write a function to find the longest common prefix string among an array of strings.If there is no common prefix, return an empty string "".
Example 1:

 Input: strs = ["flower","flow","flight"]
 Output: "fl"*/
 //IMPORTANT: .SUBSTRING() METHOD TAKE 2 PARAMETERS (1.START INDEX 2.HOW MANY 
 // INDEX GO RIGHT.
//WITH COMENTS
//
function LongestCommonPrefix(strs){
    strs.sort();                                    
    for(let i = 0; i < strs.length; i++) {              
        if(strs[0][1] !== strs[strs.length - 1][i]) 
        return strs[0].substr(0, i);
    }
    return strs[0];
};
// console.log(LongestCommonPrefix(["flower","flow","flight"]));

//FIZZ BUZZ
function fizzBuzz(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FizzBuzz")
      } else if (i % 3 === 0) {
        arr.push("Fizz")
      } else if (i % 5 === 0) {
        arr.push("Buzz")
      } else {
        arr.push(`${i}`)//to print ['1','2']
      }
    }
    return arr;
  }
  
// console.log(fizzBuzz(12))

//fibonacci with recursion
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  const result = fib(n - 1) + fib(n - 2);
  return result;
}
console.log(fib(9));
//fibonacci with iteration
const fibonacci = (n) =>{
  const fib = [0,1]
  for( let i = 2; i <= n; i++){
      fib[i] = fib[i - 2] + fib[i - 1] 
  }
  return fib[n]
} 
console.log(fibonacci(9))


//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
let containsDuplicate = function(nums) {
  nums.sort((a,b)=>{
      return a - b
  })

  for(let i = 1; i < nums.length; i ++){
    if( nums[i] === nums[i-1] ){
      return true
    }
  }
  return false
}
console.log(containsDuplicate([1,2,3,1]))

/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]*/

function groupAnagrams(strs) {
  //1. create a hashmap
  const hashTable = {}
  //2. iterate over the object
  for(let str of strs){
  //3. separate and sort each character
    const sortedStr = str.split("").sort().join()
  //4. if the sortedString isn´t in hashtable add it in an array
    if(!hashTable[sortedStr]){
      hashTable[sortedStr] = []
    }//if it is push the str into the array
    hashTable[sortedStr].push(str)
  }//return the hashtable
  return Object.values(hashTable)
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))  

/*125. Valid Palindrome
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.*/

function isPalindrome(s){
  s = s.toLowerCase().replace(/[^a-z0-9]/g,"")

  let left = 0
  let right = s.length - 1
  while( left < right){
    if( s[left] != s[right]){
      return false
    }
    left ++
    right --
  }
  return true
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))

/*Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].*/

function twoSum(numbers, target){
  const map = new Map()

  for(let i = 0; i < numbers.length; i){
    const complement = target - numbers[i]
    if(map.has(complement)){
      return [map.get(complement) + 1, i + 1]
    }
    map.set(numbers[i], i)
  }
}

console.log(twoSum([2,7,11,15,],9))
console.log(twoSum([2,3,4],6))

//2. 2D BINARY SEARCH
// //74. Search a 2D Matrix
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

const searchMatrix = (matrix, target)=>{
  //1. iterate trough the matrix arrays (BINARY SEARCH ONLY FOR SORTED ARR !!)
  for(let i = 0; i < matrix.length; i++){
      let start = 0, end = matrix[0].length -1

      while(start <= end){
          let mid = Math.floor((start + end) / 2)
          if(matrix[i][mid] === target) return true
          else if(matrix[i][mid] < target) start = mid + 1
          else end = mid -1
      }
  }
  return false
}
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],20))

// THREESUM O(n)^3
function threeSum(nums) {
  nums.sort((a, b) => a - b)
  const results = []
  //to avoid duplicates 
  for (let i = 0; i < nums.length; i++) {
      let j = i + 1
      let k = i + 2
      // avoid duplicates for i
      if (i > 0 && nums[i] === nums[i - 1]) continue;
          // avoid duplicates for j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
              // avoid duplicates for k
      if (k > j + 1 && nums[k] === nums[k - 1]) continue;
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0){
           results.push([nums[i], nums[j], nums[k]])
      }
  }
  return results
}

// 11. Container With Most Water

// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

const maxArea = (height)=>{
  //we define 2 pointers going inside and the result var
  let start = 0
  let end = height.length -1
  let result = 0

  while(start < end){
      //we calculate the smaller side
      let smallestSide = Math.min(height[start], height[end])
      //we calculate the area b * h ((base end - start) * height)
      let area = (end - start) * smallestSide
      //we store the highest area
      if( area > result) result = area
      //we move the smallest pointer
      if( height[start] > height[end]) end --
      else start ++
  }
  return result
}
/*
The function initializes a variable maxVal to -1.
The function iterates through the input array arr from right to left using a for loop.
In each iteration of the loop, it does the following:
It stores the value of the current element arr[i] in a temporary variable temp.
It replaces the current element with the current value of maxVal.
It updates the maxVal variable to be the maximum of its current value and the previous value of temp.
After completing the loop, the function returns the modified input array arr.
*/

function replaceElements(arr) {
  let maxVal = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i]
    arr[i] = maxVal
    maxVal = Math.max(maxVal, temp)
  }
  return arr
}
console.log(replaceElements([17,18,5,4,6,1]))