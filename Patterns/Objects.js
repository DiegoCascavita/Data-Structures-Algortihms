// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
    const newObj = {};
  
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === "number") {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    });
  
    return newObj;
  }
const obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
    
// console.log(stringifyNumbers(obj1))

// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum(obj) {
    return Object.keys(obj).reduce((acc, key) => {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
        acc += obj[key];
      } else if (typeof obj[key] === 'object') {
        acc += nestedEvenSum(obj[key]);
      }
      return acc;
    }, 0);
  }
let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
}
console.log(nestedEvenSum(obj2))