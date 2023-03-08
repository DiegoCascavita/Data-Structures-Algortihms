//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++){
      product = product * arr[i];
    }
    return product;
  }
console.log(productOfArray([1,2,3,10]))
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


/*Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
// recursiveRange(6) // 21
// recursiveRange(10) // 55 */
function recursiveRange(val){
    if( val === 0){
    return 0
    } else {
        return val + recursiveRange(val-1)
    }
}
console.log(recursiveRange(10))

//FIBONACCI

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
  const fibonacci = n =>{
    const arr = [0,1]
    for( let i = 2; i <= n; i++){
        arr[i] = arr[i - 2] + arr[i - 1] 
    }
    return arr[n]
  } 
  console.log(fibonacci(9))
  
  // flat the nested arrays
  function flatten(arr) {
    return arr.flat(Infinity);
  }
  console.log(flatten([1, 2, 3, [4, 5] ]))

//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']);
// ['Car','Taco','Banana']

// With .map()
function capitalizeFirst(arr){
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1))
}
console.log(capitalizeFirst(['hello', 'world']));
//loop
function capitalizeFirst2(arr){
  let modifiedArray = []
  for(let i = 0; i < arr.length; i++){
    let capitalizedStr = 
    arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    modifiedArray.push(capitalizedStr)
  }
  return modifiedArray
}
console.log(capitalizeFirst2(['hello', 'world']));

//nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let sum = 0;
  for (let val of Object.values(obj)) {
    if (typeof val === 'number' && val % 2 === 0) {
      sum += val;
    } else if (typeof val === 'object') {
      sum += nestedEvenSum(val);
    }
  }
  return sum;
}
let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (arr) {
  return arr.map(str => str.toUpperCase())
}
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))