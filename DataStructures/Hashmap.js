//Strings ONLY hashmap 
console.log("a".charCodeAt(0))

function hash(key, arrayLgth){
    let total = 0
    for (let char of key){
        //map "a"=1, "b"=2 etc...
        let value = char.charCodeAt(0)-96
        total = (total + value) % arrayLgth
    }
    return total
}
console.log(hash("", 10))