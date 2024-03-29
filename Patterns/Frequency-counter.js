/*
1. frequency counter 
2. if we found a duplicate duplicate ++
3. Si frequencyCounter[value] es un valor truthy (diferente de undefined, null, 0, false, o una cadena vacía), se utiliza su valor actual. De lo contrario, si es undefined, se asigna el valor 0.
+ 1: Añade 1 al valor obtenido anteriormente. Esto incrementa el contador de frecuencias para el valor actual.
4. else false
*/
function areThereDuplicates(...args){
  const duplicates = {} // setup and object
  
  for(let i = 0; i < args.length; i++){
    const value = args[i]
    duplicates[value] = (duplicates[value] || 0) + 1

    if(duplicates[value] > 1) return true
  }
  return false
}
console.log(areThereDuplicates(1,2,2))


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


//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(str1, str2) {
  let i = 0; // initialize pointer i to 0
  let j = 0; // initialize pointer j to 0
  
  while (i < str1.length && j < str2.length) { // loop while both pointers are within bounds
    if (str1[i] === str2[j]) { // if the characters at the current indices match
      i++; // advance pointer i
    }
    j++; // always advance pointer j
  }
  
  return i === str1.length; // return true if index [i] reached the end of the string, that means that all characters was found
}
console.log(isSubsequence('hello', 'hello world'))
 // true