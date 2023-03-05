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