//factorialize n number
function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
console.log(factorial(4))

function countDown(num){
    //base case or FINAL CASE
    if( num <= 0){
        console.log('countdown done')
        return
    }
    console.log(num) // recursive case
    num --
    countDown(num) //callback
}
// console.log(countDown(10))

//factorial recursive
function factorial(num){
    if( num === 1) return 1
    return num * factorial(num - 1)
}
console.log(factorial(5))

//HELPER METHOD
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])