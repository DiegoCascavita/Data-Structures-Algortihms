const searchMatrix = (matrix, target) => {
  let row = 0; //declara la variable row con valor 0
  let col = matrix[0].length - 1; //declara la variable col con el valor de la longitud del primer elemento de matrix menos 1
  while (row < matrix.length) { //mientras row sea menor que la longitud de matrix
    if (matrix[row][col] === target) return true; //si el elemento en la posicion [row][col] es igual al target, devuelve true
    if ( matrix[row][col] < target) row++; //si el elemento en la posicion [row][col] es menor al target, incrementa row en 1
    else col--; //si no, decrementa col en 1
  }
  return false;
} //devuelve false si el target no se encuentra en matrix
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],60))