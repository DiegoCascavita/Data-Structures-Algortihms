const canConstruct = (ransomNote, magazine)=>{
    //turn string to array to use the every method
    const a = ransomNote.split("").sort()
    const b = magazine.split("").sort()
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return false
    }
    return true
}

 console.log(canConstruct("aa","aab"))
 /*Input: head = [1,2,2,1]
Output: true */