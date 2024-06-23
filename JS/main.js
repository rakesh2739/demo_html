console.log("Hello World") ; 

// alert('Hello This is Rakki') ;

// How to write a comment inline

// Variables
var b = "smoothie"; 
console.log(b);

var someNumber = 45;
console.log(someNumber);

// Manipulate DOM with javascript
/* ... It's just a fancy way of saying
change HTML with javascript */

// var age = prompt(' What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;

// Increment num1 by 1
num1++;

// decrement num1 by 1
num1--;
console.log(num1);

// Divide , multipli * , reainder %
console.log(num1 % 6);

// Increment / decrement by any number you want
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun(){
    console.log('This is a function');
}

// Call
fun();

/* Let's create a function that takes in a name
and says hello followed by your name

For Example

Name : "Rakesh"
Return : "Hello Rakesh"
*/


function greeting(yourName){
    var result = 'Hello' + ' ' + yourName; // String concatination
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers togethers in a function ?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10 , 10);

/* While loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/

// for loop
for (let num = 0; num <= 100; num++) {
    console.log(num)
}

// Data types in javascript
let yourAge = 18; // Number 
let yourNAme = 'Rakki' // string
let name = {first: 'Sai' , last : 'Kumar'}; // Object
let truth = false; // Boolean
let groceries = ['apple' , 'banana' , 'oranges']; //array
let random; // Undefined
let nothing = null; // Value null

// Strings in javascript (common methods)
let fruit = 'banana,apple,orrange,blackberry';
let moreFruits = 'banana\napple'; // New line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2 , 6));
console.log(fruit.replace('ban' , '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2])
console.log(fruit.split(',')); // Split by coma
console.log(fruit.split('')); // Split by character

// Arrays
let fruits = ['banana' , 'apple' , 'orange' , 'pineapple'];
fruits = new Array('banana' , 'apple' , 'orange' , 'pineapple');

console.log(fruits[1]); // Access value at index

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[1]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // Removes last item
console.log(fruits.push(' Blackberries'), fruits) // appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit' ; // Same as push
console.log(fruits);
fruits.shift() ; // Remove first element from a list
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus' , ' tomato' , 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1 , 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a,b) {return a-b})); // sorting in ascending order
console.log(someNumbers.sort(function(a,b) {return b-a})); // sorting in descending order

let emptyArray = new Array();
for (let num = 0; num <10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

