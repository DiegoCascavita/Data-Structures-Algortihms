/*
    create a counter
    while until num === 0
    if num % 2 === 0  counter ++
    else  num - 1
    counter ++ 
 */
    var numberOfSteps = function(num) {
      let count = 0
  
      while( num !== 0){
          if( num % 2 === 0){
              num /= 2
          } else {
              num -= 1
          }
          count ++
      }
      return count
  }

console.log(numberOfSteps(14))
