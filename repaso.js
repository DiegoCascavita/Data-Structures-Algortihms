let romanToInteger = function(str){
    const map ={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    for( i=0; i<str.length; i++){
        const current = map[str[i]];
        const next = map[str[i+1]];
     if(current < next){
        result += next - current;
     } else {
        result += current;
     }
    }
    return result;
}
console.log(romanToInteger('XM`'))