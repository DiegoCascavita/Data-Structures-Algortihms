                       methods
.pop() //removes the last element from an array and returns that element.
.shift() // it removes the first element instead of the last.
.push() //add them onto the end of the array
.unshift() //  adds the element at the beginning of the array.   
.splice() /*  remove any number of consecutive elements from anywhere 
in an array, the 1st Arg is the position and the 2nd the quantity, and 
the 3rd can add arrays at that position !mutate the original!*/
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2, "hell yeah!");
console.log(array); // today was great hell yeah!
slice()/*copies or extracts a given number of elements to a new array, 
leaving the array it is called upon untouched,1. which position start 2 parameter at which 
position stop*/
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
// "..." spread operator copy all the array.
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
//['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
arr.indexOf() //locate the position in the array of a value
delete foods.apples;// delete the object propertie
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
return Object.keys(obj);// Object.keys return de keys of the object
  // Only change code above this line
}
console.log(getArrayOfUsers(users));

                        // != betwen let,var, const

/*var definimos una variable con local scope, también nos permite 
utilizar un comportamiento llamado hoisting, sin generar ningún error.

let definimos variable con block scope, las variables 
declaradas de esta manera nos genera un error de referencia cuando
 intentamos utilizar hoisting.solo si esta en "{}"

const definimos variables de sólo lectura (no confundir con inmutables), 
esto quiere decir que, cuando asignamos una variable, el nombre de esta 
va estar asignada a un puntero en memoria, el cual no puede ser
 sobreescrito o reasignado.*/
 
                         FUNCTIONS

/* function in JavaScript is similar to a procedure—a set
 of statements that performs a task or calculates a value,
  but for a procedure to qualify as a function, it should take some 
  input and return an output where there is some obvious relationship 
  between the input and the output. To use a function, you must define 
  it somewhere in the scope from which you wish to call it.*/

arr1.pop // (removes the last element from an array and returns that element.)
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
// r/The first console.log will display the value 6, and the second will display the value [1, 4].

arr1.shift //( It works just like .pop(), except it removes the first element instead of the last.)
const OurArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
// r/removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].


arr1.unshift //(works exactly like .push(), but instead of adding the element at the end of the array,
 unshift()// adds the element at the beginning of the array.)
 const ourArray = ["Stimpson", "J", "cat"];
 ourArray.shift();
 ourArray.unshift("Happy");
 //r/After the shift, ourArray would have the value ["J", "cat"]. After the unshift, 
// ourArray would have the value ["Happy", "J", "cat"].
 

arr1.push //(takes one or more parameters and "pushes" them onto the end of the array.)
const arr1 = [1, 2, 3];
arr1.push(4);
// r/ arr1 now has the value [1, 2, 3, 4]

                       /*OPERADORES LOGICOS

== EQUAL 
=== ESTRICTO EQUAL
> MAYOR QUE
< MENOR QUE 
!= DIFERENTE
|| OR O 
IF
ELSE*/

/*A switch statement tests a value and can have many case statements 
which define various possible values. Statements are executed from the first matched 
case value until a break is encountered., DEFAULT is used for the else cases*/
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val){
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
  }
    /* Only change code above this line
    return answer;*/
  }
  caseInSwitch(1);
string ("me")
array [24,32]
const mydog =

                                      LOOPS
const theArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
  declaration, condition, result
}
//while("executes while the condition turns to false or viceversa")

                                      ternary
                                    
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
//the same
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

//cosas que no entendi
//"recursion": https://www.youtube.com/watch?v=LteNqj4DFD8
 
function factorial(n){
  //base case "respuesta esperada"
  if(n == 1 || n == 0)
    return 1;
    // si "n" no es igual a 4 el algoritmo saltara el if
  else   
  return n * factorial(n-1)
}
console.log(factorial(4))

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
for (let i= 0; i < arr.length; i++){
  if (arr[i].indexOf(elem) == -1){
    newArr.push(arr[i]);
  }
}
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

"look up fx"

//para una constante inmutable Object.freeze

                                //template literals
 const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

//Create Strings using Template Literals "WARNING"
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

//get = return; set = change var;
// Only change code below this line
class Thermostat{
  constructor (fahrenheit){
    this.fahrenheit = fahrenheit; 
  }
  get temperature(){
    return (5/9) * (this.fahrenheit-32);
  }
  set temperature(celsius){
    this.fahrenheit = (celsius * 9.0)/5+32; 
  }
}
// C = 5/9 * (F - 32), F = C * 9.0 / 5 + 32;

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

                        //regular expresions REGEX 

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

//undefined="var without a value declared"
//null ="intentional defined like empty"

                             //BASI DATA STRUCTURE
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

// how to add properties to an object ?
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line
console.log(foods);

                                //scripting
//1. how to convert celsius to fahrenheit
function convertCelsiusToFahrenheit(celsius){
  let fahrenheit = celsius*9/5+32;
  return fahrenheit;
}
convertCtoF(30);
console.log(convertCelsiusToFahrenheit);
//2. how to reverse a string
function reverseString(str){
  return str.split('').reverse().join('');
}
//3. how to n! a number
function factorialize(num){
  if(num ===0 || num ===1)
  return 1;
  for(var i = num-1; i>=1; i--)
  num*=i;
  return num;}
  //4. how to find the longest word in a string       REDUCEEEEEE
  function find_Longest_Word(str){
    var longestWord = str.split(' ').reduce(function(longest, currentWord){
      return currentWord.length > longest.length ? currentWord : longest;
    }, '');
    return longestWord.length;
  }  find_Longest_Word("The quick brown fox jumped over the lazy dog")
    // NOTE !!! if u dont put a space "" split will return letter by letter`
  // option #2
                                  // .reduce
/* this method takes 2 argumentes: 1.the  initial value "be careful to put ' ' 
beacuse reduce takes index 0 the 1st value 2. the current value*/
function find_Longest_Word(str){
  var strSplit = str.split(' ');
  var longestWord = strSplit.reduce(function(longest,currentWord){
    if(currentWord.length > longest.length)
      return currentWord;
    else  
      return longest;
  }, '');
  return longest.length;
}
find_Longest_Word("The quick brown fox jumped over the lazy dog")
console.log(longest.length);
                           // .map & Math.max && .apply
// .map literally is iterate the array

// how to found the high num in a nested array
function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
/*.                                  .aplply
apply Note that the first argument to apply() sets the value of ‘this’,
 not used in this method, so you pass null.Now that you have a method to return 
 the largest number in a array, you can loop through each sub-arrays with 
the map() method and return all largest numbers*/
var num = [4,5,1,3];
console.log(Math.max.apply(null, num)); // logs 5

                                    //.endsWith()
function confirmEnding(string, target) {
  // We return the method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding('Bastian', 'n');
//                                   .repeat()
//5. how to repeat a string n! times 
function repeatStringNumTimes(str,num){
  var repeatedString = "";
  while (num > 0){
    repeatedString += str;
    num --;
  } return repeatedString;
}
repeatStringNumTimes("abc", 3);
//or
if(times >0){
  return string.repeat(times);
} else {
  return '';
}
                              //.find()
//6. We need to return the element from an array that passes a function.
function findElement(arr, func){
  let num = 0;
  for(let i=0; i<arr.length; i++){
    num=arr[i];
    if (func(num)){
      return num;
    }
  }
return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
// or
function findElement(arr, func){
  return arr.find(func);
}
// 7. how to check if a var is boolean
booWho(null);
function booWho(bool) {
  return typeof bool === "boolean";
}
                            //.charAt(index)
//8. how to convert initial letter uppercase and the others lowercase
titleCase("I'm a little tea pot");
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ") // .chart at select any letter at index in a string REGEX 
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}
                               /*Falsy elements
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/
//.9 return all the falsy elements in the array
bouncer([7, "ate", "", false, 9]);
function bouncer(arr) {
  return arr.filter(Boolean);
}
                          //order arrays with .sort()
//11. sort sn array and then compare the 1st value with a num
function getIndexToIns(arr,num){
  return arr.filter(val => num > val).length;
}
/*12. Return true if the string in the first element of the array contains
 all of the letters of the string in the second element of the array… */
 mutation(["hello", "hey"]);
 function mutation(arr){
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function(letter){
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
 }
// ESTUDIAR .EVERY() Y .INDEXOF() 
// 13. how to convert 2 arrays into two dimensional arrat
function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;}
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
                          //OOP Object oriented 
// constructor fx object to manipulate later
function Dog(){
  this.name = "Giogi";
  this.color = "white";
  this .numLegs = 4;
}
this /* works to indicate the var can changue but don´t conflict
 with the code*/
// ""new"" to create a new object with "this" atributes
new Bird(name);
/*                                  .prototype & inheritance
it add the properti to ALL the new instances in the object*/
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() {}   
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat();
                            //mixin for similar objects
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};
// Only change code below this line
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("gliding");
  }
};
glideMixin(boat);//here u give them the atribute
glideMixin(bird);
                            /* IIFE 
inmediately invoked function expression execute a fx inmediately.*/
(function () {
  console.log("Chirp, chirp!");
})();
//                                FUNCTIONAL PROGRAMMING
/*1.Isolated functions - there is no dependence on the state of the 
program, which includes global variables that are subject to change
2.Pure functions - the same input always gives the same output
3.Functions with limited side effects - any changes, or mutations,
 to the state of the program outside the function are carefully controlled*/

//CALLBACKS HIGH ORDER F(X) 
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
/*                            .map()
f(x)are 1st class objects in JS 
When the callback is used, it is passed three arguments.
 The first argument is the current element being processed.
  The second is the index of that element and the third is 
  the array upon which the map method was called.*/
  const users_ = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users_.map(user => user.name);
  console.log(names);
  //example
  const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}
//same
const ratings1 = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;
};
  /*                          .FILTER()
  filter calls a function on each element of an array
   and returns a new array containing only the elements
    for which that function returns a truthy value - that is
    , a value which returns true if passed to the Boolean() 
    constructor. In other words, it filters the array, 
    based on the function passed to it. Like map, it does 
    this without needing to modify the original array.*/
 const users1 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
  ];
const userUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);
// how to filter a movie with >8 rating with map and filter
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
];
const filteredList= watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({title : movie["Title"],
      rating : movie["imdbRating"]}));
console.log(filteredList);      
/*                            .CONCAT()
same as i ++; etc..*/
[1, 2, 3].concat([4, 5, 6]); // console.log([1, 2, 3, 4, 5, 6].)
/*                            .reduce
The first (i)argument is known as the accumulator, which gets 
assigned the return value of the callback function from the
 previous iteration, the second is the current element being 
 processed, the third is the index of that element and the fourth 
 is the array upon which reduce is called.
In addition to the callback function, reduce has an additional
 parameter which takes an initial value for the accumulator. 
 If this second parameter is not used, then the first iteration 
 is skipped and the second iteration gets passed the first element
  of the array as the accumulator.*/
  const users2 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
  console.log(sumOfAges);//64
  //
  const users4 = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(usersObj);//{ John: 34, Amy: 20, camperCat: 10 }
  // using filter reduce && map
  const averageRating = watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  /*                     .ParseInt
  comprueba el primer argumento, una cadena, e intenta devolver un entero 
  de la base especificada
                          .Math.pow (x^2)
  The function should return a new array containing the squares of only 
  the positive integers*/
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  const squareList = arr => {
    // Only change code below this line
    return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
    // Only change code above this line
  };
  console.log(squaredIntegers);
/*                            .sort 
                 CHANGUE THE ELEMENTES IN ORIGIN
The sort method sorts the elements of an array according to
 the callback function.
 : If compareFunction(a,b) returns a value less than 0 for
two elements a and b, then a will come before b.
If compareFunction(a,b) returns a value greater than 0 for 
two elements a and b, then b kwill come before a.
 If compareFunction(a,b) returns a value equal to 0 for two
  elements a and b, then a and b will remain unchanged.*/
   function ascendingOrder(arr){
    return arr.sort(function(a,b){
      return a - b;
    });
   }
   ascendingOrder([1, 5, 2, 3, 4]);//[1, 2, 3, 4, 5]
   // or
   function reverseArray(arr){
    return arr.sort(function(a,b){
      return a===b ? 0 : a < b ? 1 : -1;
    });
   }
   reverseAlpha(['l', 'h', 'z', 'b', 's']);//['z', 's', 'l', 'h', 'b'].
   //return an array organised with sort without mutate the original
   var globalArray = [5, 6, 3, 2, 9];
   function nonMutatingSort(arr){
    return[].concat(arr).sort(function(a,b){
      return a -b;
    });
   }
nonMutatingSort(globalArray);
/*                              .SPLIT
The split method splits a string into an array of strings,if
the delimiter is a space, you get an array of words, and iF
the delimiter is an empty string, you get an array of each
character in the string*/
const str = "Hello World";
const bySpace = str.split(" ");//["Hello", "World"]

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);//["How", "are", "you", "today"]
// split this array and join it properly

function sentensify(str) {
return str.split(/\W/).join(' ');// May the force ...
}
sentensify("May-the-force-be-with-you");
/*                             .trim
El método trim( ) elimina los espacios en blanco en ambos extremos del 
string. Los espacios en blanco en este contexto, son todos los caracteres
 sin contenido (espacio, tabulación, etc.) y todos los caracteres de 
 nuevas lineas (LF,CR,etc.)*/

 //20. transform the text into hyphen (-)separated
 var globalTitle = "Winter Is Coming";
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
var winterComing = urlSlug(globalTitle);
                              /*.every
The every method works with arrays to check if every element passes
 a particular test. It returns a Boolean value - true if all values
  meet the criteria, false if not.
For example, the following code would check if every element in 
the numbers array is less than 10:*/
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;//false
});
// 22. check if all the num are positive
function checkPositive(arr) {
return arr.every(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);
/*                             .some
The some method works with arrays to check if any element passes a 
particular test. It returns a Boolean value - true if any of the 
values meet the criteria, false if not.*/
const numbers4 = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;//true
});
/*          Introduction to Currying and Partial Application

The arity of a function is the number of arguments it requires.
Currying a function means to convert a function of N arity into
 N functions of arity 1.In other words, it restructures a function
so it takes one argument, then returns another function that takes 
the next argument, and so on.

Here's an example:*/

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2) //3
/*This is useful in your program if you can't supply all the arguments
 to a function at one time. You can save each function call into a 
 variable, which will hold the returned function reference that 
 takes the next argument when it's available. Here's an example
  using the curried function in the example above:*/
  const funcForY = curried(1);
  console.log(funcForY(2)); // 3
  /*Similarly, partial application can be described as applying a 
  few arguments to a function at a time and returning another function
   that is applied to more arguments. Here's an example:*/
   function impartial(x, y, z) {
    return x + y + z;
  }
  
  const partialFn = impartial.bind(this, 1, 2);
  partialFn(10); // 13  
  /* .bin()The bind() method creates a new function that, when called,
  has its this keyword set to the provided value, with a given sequence
  of arguments preceding any provided when the new function is called.*/
  function add(x) {
    return y => z => x + y + z;//curryin
  }
  add(10)(20)(30);
  
/* shortcuts
ctrl + h (comentary)
ctrl + d (select element)
ctrl + arrow ( move per blocks)
ctrl + h (serach and replace)
alt + click (write in many lines)
alt + arrow down or up(move all the line in eje y)*/

 /*                          hard scripting

 .23 sum all the numbers between 1-4*/
 function sumAll(arr){
  let sumBetween = 0;
  for(let i= Math.min (...arr); i <= Math.max(...arr); i++){
    sumBetween += i;
  } return sumBetween;// [10]
 }
 sumAll([1, 4]);
 //.include()
 /* how to compare 2 arrays and return only only found in 
 one of the two given arrays*/
function diffArray(arr1,arr2){
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);//4
/* .24 Remove all elements from the initial array that are of the 
same value as these arguments.*/
function destroyer(arr, ...valsToRemove){

  return arr.filter(elem => !valsToRemove.includes(elem));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);// [1,1]
/* .25 convert the array onto spinalcase(hyphen separated)*/
function spinalCase(str){
return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLocaleLowerCase();
}
spinalCase('This Is Spinal Tap');// ['this-is-spinal-tap']
/* .26 translate a string into pig latin (
  - If a word begins with a consonant, take the first consonant 
  or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
)*/
/*Use replace() on the string, using a regular expression to check if 
the first letter is a consonant and adding way at the end in this case.
 If the first letter is a consonant nothing will happen at this point.
Use replace() again to check for consonants at the beginning of the word
 and to move it or them to the end of the word and add ay at the end.*/
function translatePigLatin(str){
  return str
    .replace(/^[aeiou]\w*/, '$&way')
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
translatePigLatin("consonant");
/* .26 Search and Replace
1.First argument is the sentence to perform the search and replace on.
2.Second argument is the word that you will be replacing (before).
3.Third argument is what you will be replacing the second argument 
with (after).*/
/* .test() El método test() ejecuta la búsqueda de una ocurrencia entre 
una expresión regular y una cadena especificada. Devuelve true o false.*/
function myReplace(str, before, after) {
  /* Check if first character of argument "before" is a capital or lowercase 
  letter and change the first character of argument "after" to match the 
  case*/
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }
  /* return string with argument "before" replaced by argument "after" 
  (with correct case)*/
  return str.replace(before, after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
/* .27 DNA PAIRING Write a function to match the missing base pairs for the 
provided DNA strand. For each character in the provided string, find the 
base pair character. Return the results as a 2d array.*/
function pairElement(str) {
  // Function to match each character with the base pair
  let matchWithBasePair = function(char, pairedArray) {
    switch (char) {
      case "A":
        pairedArray.push(["A", "T"]);
        break;
      case "T":
        pairedArray.push(["T", "A"]);
        break;
      case "C":
        pairedArray.push(["C", "G"]);
        break;
      case "G":
        pairedArray.push(["G", "C"]);
        break;
    }
  };
  // Find pair for every character in the string
  const paired = [];
  for (let i = 0; i < str.length; i++) {
    matchWithBasePair(str[i], paired);
  }
  return paired;
}
pairElement("GCG");
//or
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  var arr = str.split(""); //split string into array of characters
  return arr.map(x => [x, pairs[x]]);/*map character to array of character
   and matching pair*/
}
pairElement("GCG");
/* .28 Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.(-)
//.charcode() El charCodeAt() método devuelve un número indicando el valor
Unicode  del carácter en el índice proporcionado.*/
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;
  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });
  return missing;
} 
fearNotLetter("abce");//e
/* .set() The Set object lets you store unique values of any type, whether 
primitive values or object references.
Sorted Union
Write a function that takes two or more arrays and returns a new array of 
unique values in the order of the original provided arrays.*/
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
const uniteUnique = (...arr) => [...new Set(arr.flat())];
/* .flat El método flat() crea una nueva matriz con todos los elementos de 
sub-array concatenados recursivamente hasta la profundidad especificada.*/
var arr4 = [1, 2, [3, 4]];
arr1.flat();// [1, 2, 3, 4]
/*                            fibonacci numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that 
are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number in the sequence is the sum of the two previous numbers. The first six 
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than or equal to 10 are 1, 1, 3, and 5.*/
function sumFibs(num){
  let prevNumber = 0;
  let currNumbber = 1;
  let result = 0;
  while (currNumber <= num){
    if (currNumbber % 2 !== 0){// % devuelve el residuo de una división
      result += prevNumber;
    }
    currNumbber += prevNumber;
    prevNumber = currNumbber - prevNumber;
  }
  return result;
}
sumFibs(4);
/* Sum All Primes. A prime number is a whole number greater than 1 with exactly two divisors:
 1 and itself. For example, 2 is a prime number because it is only divisible 
 by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less 
than or equal to num.*/
function sumPrimes(num){
  function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){//raiz cuadrada
      if(num % i == 0)
      return true;
    }
  return false;
  }
  let sum = 0;
  for(let i = 2; i <= num; i++){
    if(isPrime(i))
    sum =+ i;
} return sum;
}
/*Code Explanation
We loop over all values in our range, adding them to the sum if they are prime.
Our primality checking function returns false if the target number is divisible
 by any number in between 2 and the square root of the target number. 
 We only need to check up to the square root because the square root of a 
 number is the largest possible unique divisor.*/
//or
function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  } return primes.reduce((sum, prime) => sum + prime, 0);
}
sumPrimes(10);
/*Code Explanation
This solution is very similar to Solution 1.
In this solution we retain a list of all primes found so far and check if 
any of these numbers divide into each number in our range.
Note that this solution is actually less efficient than Solution 1 
for very large values of n. Frequently growing the size of an array in 
JavaScript can be inefficient and slow*/

/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly 
divided by both, as well as by all sequential numbers in the range between these 
parameters.
The range will be an array of two numbers that will not necessarily be in numerical
 order.For example, if given 1 and 3, find the smallest common multiple of both 1
 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer 
 here would be 6.*/
 function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}
smallestCommons([1, 5]);
//or
/*El método fill() cambia todos los elementos en un arreglo por un valor estático, 
desde el índice start (por defecto 0) hasta el índice end (por defecto array.length
  ). Devuelve el arreglo modificado.*/
  function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
      .fill(0)
      .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      const divisible = range.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
    }
  } smallestCommons([1, 5]);
/* 30. make a program that computes the function especified in the estatement 
erasing the values that not match the requirements*/
function dropElements(arr,func){
  while (arr.length > 0 && !func(arr[0])){
    arr.shift();
  }
  return arr;
}
dropElements([1,2,3,4],function(n){
  return n >= 3;
});
/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.*/
function steamrollArray(arr) {
  return arr.flat(4);
}
steamrollArray([1, [2], [3, [[4]]]]);
/* 31. Return an English translated sentence of the passed binary string.
The binary string will be space separated.*/
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
/* CODE EXPLANATION First we use split() to be able to work on each character 
as an Array element Then use map() to process each element from binary to decimal
using pareseInt() Last we can use String.fromCharCode() to convert each ASCII 
number into the corresponding character However fromCharCode() expects a series 
of numbers rather than an Array We can use ES6 Spread Operator to pass in an 
Array of numbers as individual numbers*/

/*Check if the predicate (second argument) is truthy on all elements of a
collection (first argument).In other words, you are given an array collection
of objects. The predicate pre will be an object property and you need to return 
true if its value is truthy. Otherwise, return false.In JavaScript, truthy 
values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] 
notation.*/
function TruthCheck(collection,predicate){
  return colllection.every(obj => obj[predicate]);
}
truthCheck([{ name: "Quincy", role: "Founder", isBot: false },
 { name: "Naomi", role: "", isBot: false }, 
 { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
/* .32It has to add two numbers passed as parameters and return the sum.
It has to check if any of the numbers are actual numbers, otherwise return 
undefined and stop the program right there.
It has to check if it has one or two arguments passed. More are ignored.
If it has only one argument then it has to return a function that uses that 
number and expects another one, to then add it.*/
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}
addTogether(2,3);
/* Math.round return the nearest value to the decimal point,
Math.ceil devuelve el entero mayor o igual más próximo a un número dado.
a  is the orbit's semi-major axis
μ=GM  is the standard gravitational parameter
G  is the gravitational constant,
M  is the mass of the more massive body*/
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward
and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, 
spaces and symbols) and turn everything into the same case (lower or upper case) 
in order to check for palindromes.
We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR 
among others. We'll also pass strings with special symbols, such as 2A3*3a2, 
2A3 3a2, and 2_A3*3#A2.*/
function palindrome(str) {
  const alphanumericOnly = str
      // 1) Lowercase the input
      .toLowerCase()
      // 2) Strip out non-alphanumeric characters
      .match(/[a-z0-9]/g);
  // 3) return string === reversedString
  return alphanumericOnly.join('') ===
      alphanumericOnly.reverse().join('');
}
palindrome("eye");
/* Roman Numeral Converter
Convert the given number into a roman numeral.*/
function convertToRoman(num) {
  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  var res = [];
  ref.forEach(function(p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join('');
}
/*One of the simplest and most widely known ciphers is a Caesar cipher, also known
 as a shift cipher. In a shift cipher the meanings of the letters are shifted by
  some set amount. A common modern use is the ROT13 cipher, where the values of 
  the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. 
  Write a function which takes a ROT13 encoded string as input and returns a 
  decoded string. All letters will be uppercase. Do not transform any non-
  alphabetic character (i.e. spaces, punctuation), but do pass them on.*/
  function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}
/* Telephone Number Validator
Return true if the passed string looks like a valid US phone number.*/
function telephoneCheck(str) {
  return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}
telephoneCheck("555-555-5555");
/* make a cash register, instructions in freecodecamp*/
var denom = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
 var output = {status: null, change: []};
 var change = cash - price;
 var register = cid.reduce(function(acc, curr) {
 acc.total += curr[1];
 acc[curr[0]] = curr[1];
 return acc;
 }, {total: 0});
 if(register.total === change) {
 output.status = 'CLOSED';
 output.change = cid;
 return output;
 }
 if(register.total < change) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 var change_arr = denom.reduce(function(acc, curr) {
 var value = 0;
 while(register[curr.name] > 0 && change >= curr.val) {
 change -= curr.val;
 register[curr.name] -= curr.val;
 value += curr.val;
 change = Math.round(change * 100) / 100;
 }
 if(value > 0) {
 acc.push([ curr.name, value ]);
 }
 return acc;
 }, []);
 if(change_arr.length < 1 || change > 0) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 output.status = 'OPEN';
 output.change = change_arr;
 return output;
}
// DOM manipulation
/* manipulación de DOM document object model API

Las siglas DOM significan Document Object Model,es la estructura del documento HTML. Una página HTML está
formada por múltiples etiquetas HTML, anidadas una dentro de otra, 
 formando un árbol de etiquetas relacionadas entre sí, que se denomina 
 árbol DOM
 Éste proveé una representación estructural del documento, permitiendo 
 modificar su contenido y presentación visual mediante código JS.
    

 en la consola del navegador se busca con la plantilla
 document.'title, link, etc ..'*/
 let elemento1 = document.links; 
console.log(elemento);
/* para consutar por id o class */
const element = document.getElementById(URL);
const elemento2 = document.querySelectorAll('.link');
const elemento3 = document.getElementsByClassName('x');
const text = document.createTextNode('nuevo nodo');
//despues de declararlas, se puede llamar en un nueva nueva instancia
text.insertAdjacentElement()
