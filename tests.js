/*
1. sort the 2 arrays
2. iterate trough both
3. send the matches to a new array
 */
function solution(s1, s2) {
    const s1Sorted = s1.sort((a,b)=> a - b)
    const s2Sorted = s2.sort((a,b)=> a - b)
    let result = []
    
    for(let i = 0; i < s1Sorted.length || i < s2Sorted.length; i++){
        if(s1Sorted[i] === s2Sorted[i]){
            result.push([i])
        }
    }
    return result
}

let s1 = "aabcc"
let s2 = "adcaa"
console.log(solution)