function solution(sequence) {
  let count = 0; // Number of violations

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (count > 1) {
        return false;
      }

      // Check if removing the current or previous element would fix the violation
      if (i > 1 && i < sequence.length - 1 && sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }

  return true;
}