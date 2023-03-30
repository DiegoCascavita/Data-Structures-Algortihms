function solution(year) {
    // Calculate the century by dividing the year by 100 and rounding down
    const century = Math.floor((year - 1) / 100) + 1;
    return century;
  }

 console.log(solution(1905))
 /*Input: head = [1,2,2,1]
Output: true */