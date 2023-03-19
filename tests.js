
const evenOddBit = function(n) {
    const binary = n.toString(2);
  let even = 0;
  let odd = 0;
  
  binary.split('').forEach((digit, i) => {
    if (digit === '1') {
      if (i % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  });
  
  return [even, odd];
}
console.log(evenOddBit(2))