function solution(matrix) {
  let totalSum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let j = 0; j < cols; j++) {
    let isHaunted = false;

    for (let i = 0; i < rows; i++) {
      if (matrix[i][j] === 0) {
        isHaunted = true;
      }

      if (!isHaunted) {
        totalSum += matrix[i][j];
      }
    }
  }

  return totalSum;
}
