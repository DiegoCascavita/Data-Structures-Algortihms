/**
CREATE A MIN VAR
CREATE A MAX VAR
CREATE A SUM  VAR
 */
const average = function(salary) {
    let sum  = 0
    let min = salary[0]
    let max = salary[0]

    //calculate max, min
    for(let i = 0; i < salary.length; i++){
        sum += salary[i]
        if(salary[i] < min){
            min = salary[i]
        }
        if( salary[i] > max){
            max = salary[i]
        }
    }
    return (sum - min - max) / (salary.length - 2)
};