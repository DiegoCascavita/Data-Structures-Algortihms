
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
//console.log(isPalindrome('OSo'))
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

Write a function to find the longest common prefix string amongst an array 
of strings.
If there is no common prefix, return an empty string "".
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
console.log(LongestCommonPrefix(["flower","flow","flight"]));

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
        arr.push(`${i}`)//to ['1','2']
      }
    }
    return arr;
  }
  
console.log(fizzBuzz(12))