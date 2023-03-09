let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
result = userCheck.test(username);
console.log(result)
/*Code Explanation
^ all except that characters
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
+ - one or more cases
w/gi - a-zA-Z, i="more cases"g"upper and low cases"
* - 0 or more characters
{3,5} how many times it repeat
"s" white space characters
? optional letter(can be ignored)
\ = literally meaning of the sigh*/

                                debug
console.log(typeof "");//string
console.log(typeof 0);//number
console.log(typeof []);//object
console.log(typeof {});// object