const isPalindrome = function(head) {
    if(head.length <= 2) return false
    
    let i = 0
    let j = head.length-1
    while (head[i] < head[j]){
        if(head[i] != head[j]){
            return false
            i ++
            j--
        }
    }
    return true 
 }

 console.log(isPalindrome([1,2]))
 /*Input: head = [1,2,2,1]
Output: true */