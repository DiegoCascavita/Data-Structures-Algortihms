/*
create a helper function to find palindromes
create a function to splice into a new str
from 0 to [i] to [i]+1
*/

const validPalindrome = (s)=>{
  for (let i = 0; i < s.length; i++) {
    const temp = s.slice(0, i) + s.slice(i + 1)
    if(isPalindrome(temp)) return true
  }
  return isPalindrome(s)
}
function isPalindrome(str){
  let left = 0
  let right = str.length -1
  while( left < right){
    if(str[left] !== str[right]){
      return false
    }
    left ++
    right --
  }
  return true
}

console.log(validPalindrome('abc'))

