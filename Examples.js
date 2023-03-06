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