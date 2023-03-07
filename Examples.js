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