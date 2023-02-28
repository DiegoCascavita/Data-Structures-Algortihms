//REVESER STRING
function reverse(str){ 
    return str.split("").reverse().join("")
}
console.log(reverse('diego'))

//ADD (n) NUMBERS
function add(n){
    return n * (n + 1)  / 2
}
console.log(add(2))

//COUNT CHARACTERS
let countCharacters = (str)=>{
    return str.length
}
console.log(countCharacters('Eliana'))

//-----------------------------PATERNS
//                        FREQUENCY COUNTER

//*write a function called same which compare 2 arrays, should return true if every value in the array es el resultado al cuadrado del segundo. *//
//------------------------------
function same(arr1,arr2){
  if( arr1.length != arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length ; i++){
    let correctIndex = arr2.indexOf(arr1[i] **2)
    if(correctIndex === -1){
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}
console.log(same([1,2,3],[1,4,9,3,3]))
//-------------------------------------------------------------
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
  
    // Count the frequency of each number in the first array
    for (let num of arr1) {
      frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
    }
  
    // Count the frequency of each number squared in the second array
    for (let num of arr2) {
      frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
    }
  
    // Check if the frequencies of the squared numbers match the frequencies of the numbers
    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter1[key ** 2] !== frequencyCounter2[key]) {
        return false;
      }
    }
  
    return true;
  }
console.log(same([1,2,3],[1,4,9]))
//ANAGRAM
/**determine if the arr2 containt the same characters of the arr1 **/
function anagram(arr1,arr2){
  if (arr1.length !== arr2.length){
    return false
  } 
  let str1 = arr1.sort().toString()
  let str2 = arr2.sort().toString()

  return str1 === str2
}
console.log(anagram(["hola"], ["aloh"]))
console.log(anagram([1, 2, 3], [4, 5, 6]))
