//REVESER STRING
function reverse(str){ 
    return str.split("").reverse().join("")
}
// console.log(reverse('eliana sofia guerrero rincon'))
// console.log(reverse('diego alejandro cascavita'))

//ADD (n) NUMBERS
function add(n){
    return n * (n + 1)  / 2
}


//COUNT CHARACTERS
let countCharacters = (str)=>{
    return str.length
}
// console.log(countCharacters('Eliana'))
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(num1, num2){
  return [...num1.toString()].sort().join('') === [...num2.toString()].sort().join('')
}
console.log(sameFrequency(123,321))
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
// console.log(same([1,2,3],[1,4,9,3,3]))
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
// console.log(same([1,2,3],[1,4,9]))
//ANAGRAM
/**determine if the arr2 containt the same characters of the arr1 **/
function anagram(palabra1, palabra2) {
  // Si las palabras tienen diferente longitud, entonces no son anagramas
  if (palabra1.length !== palabra2.length) {
    return false;
  }
  // Convertir los arreglos de caracteres en cadenas y ordenarlos
  let cadena1 = palabra1.join("").split("").sort().join("")
  let cadena2 = palabra2.join("").split("").sort().join("")
  // Si las cadenas ordenadas son iguales, entonces las palabras son anagramas
  if (cadena1 === cadena2) {
    return true;
  } else {
    return false;
  }
}
// console.log(anagram(["hola"], ["aloh"]))
// console.log(anagram([1, 2, 3], [2, 3, 1]))
function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    let letter = arr2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// console.log(validAnagram('anagram', 'nagaram'))
