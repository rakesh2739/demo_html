console.log("javascript");
console.log("Rakesh");
// Variables
var name = "Rakesh";
var age = 18;
if (age =18) {    
    console.log("Rakesh is of age 18");
    age+=1
}
else if(age!=18){
    console.log("Rakesh is not of age 18");
}
else{
    console.log("Rakesh is not of age 18")
}
for (let i = 0; i < 6; i++) {
    console.log(i*2)
}
i=0;
do {
    console.log(i);
    i++;
} while (i<6);
var operator = 2;
switch (operator) {
    case 1:
        console.log("operator is set to 1");
        break;
    case 2:
        console.log("operator is set to 2")
    default:
        text = "no Value found"
        break;
}
const fruits = ["Apple" , "Mango" , "Litchi" , "Banana" , "Pear"];
fruits.toString();
console.log(fruits);
const fruits2 = ["Apple" , "Mango" , "Litchi" , "Banana" , "Pear" , "Guava"];
console.log(fruits2);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits2.length);
console.log("popped element :" ,fruits2.pop());
fruits.sort();
console.log("After sorting the array");
console.log(fruits);
console.log("Adding New element");
fruits.push("Guava");
console.log("fruits : " , fruits)

const numbers = [11, 23, 16, 20];
const result = numbers.filter(numgrt20);

function numgrt20(numbers) {
  return numbers >= 18;
}
console.log(result);
