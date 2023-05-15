function product(a, b){
  var result = 0;
  if( b == 0 ) return result;
 
  for(var x = 0; x < b; x++){
    result += a;
  }
 
  return result;
}
 
console.log( product( 3, 5 ) ); // 15
console.log( product( 7, 0 ) ); // 0