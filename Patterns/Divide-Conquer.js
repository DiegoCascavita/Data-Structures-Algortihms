//given a sorted array of integers, write a funciton that accepts a value, and return the index of this value in the array

function search(arr,num){
    for( let i = 0; i < arr.length; i++){
        if(arr[i] === num ){
            return i
        }
    }
    return -1
}
console.log(search([1,2,3,4,5,6,7,8],3))
//Binary search
function search2(arr,num){

    let min = 0
    let max = arr.length - 1

    while(min <= max){
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle]
        if(arr[middle] < num){
            min = middle + 1
        } else if(arr[middle] > num){
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}
console.log(search2([1,2,3,4,5,6],2))

