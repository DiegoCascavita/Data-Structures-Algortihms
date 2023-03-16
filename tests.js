const twoSum = function(numbers, target) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement) + 1, i + 1];
    }
    map.set(numbers[i], i);
  }
  return false;
};
console.log(twoSum([11,15,2,7,],9))