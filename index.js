// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     alert('Hello World!');
// });

// console.log("Hi, my name is roopam!")
// console.log(25);

// This is a single line comment

/*
This is a 
multi-line comment
*/

// Variables - store, access, manipulate data
// let, var, const

// let firstName = "Roopam Gupta";
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)

// firstName = "John";
// console.log(firstName);


// // var - can be defined & declared again
// var firstVar = 25;
// console.log(firstVar);

// firstVar = 26;
// console.log(firstVar);

// var firstVar = 100;
// console.log(firstVar);


// // let - can be defined but not declared again
// let secVar = 30;
// console.log(secVar);

// secVar = 31;
// console.log(secVar);

// // let secVar = 300;
// // console.log(secVar);



// // const - constant value, cannot be changed
// const thirdVar = 35; 
// console.log(thirdVar);

// // thirdVar = 36;
// // console.log(thirdVar);


// Data Types - primtive/non-primitive
// Primitive Data Types

// // string
// let firstName = "John Doe";
// console.log(firstName);
// console.log(typeof firstName);

// // number
// let num = 25;
// console.log(num);
// console.log(typeof num);

// // Boolean - true/false
// let isMarried = false;
// console.log(isMarried);
// console.log(typeof isMarried);

// // Undefined
// let lastName;
// console.log(typeof lastName);

// // Null
// let value = null;
// console.log(value);
// console.log(typeof value);

// // Symbol


// let randomValue = "random string";
// randomValue = 45;
// console.log(randomValue);


// // Numbers
// let number = 40;
// console.log(number);

// number = number + 1;
// number+=1;
// console.log(number);

// number++;
// number++;
// number++;
// number++;
// console.log(number);


// number+=5;
// console.log(number);


// number--;
// number--;
// console.log(number);

// number-=5;
// console.log(number);


// number*=5;
// console.log(number);

// number/=5;
// console.log(number);


// String concatenation
// const sentence = "my full name is" + " John Doe"
// const firstName = "John";
// const lastname = "Doe";
// const fullName = firstName + " " + lastname;
// console.log(fullName);

// const sentence = "my full name is " + fullName;
// console.log(sentence);


// template literals  - ${}
// const firstName = "John"
// const lastname = "Doe"
// const sentence = "Hi, my first name is " + firstName + " and my last name is " + lastname + "."
// console.log(sentence)


// const sentence2 = `Hi, my first name is ${firstName} and my last name is ${lastname}.`
// console.log(sentence2)

// console.log(3 + 2);
// console.log(3 - 2);

// console.log('3' + 2); // string concatenation
// console.log('3' - 2); // maths
// console.log('3' * 2); // maths
// console.log('3' / 2); // maths

// // ! - not
// let isMarried = false;
// console.log(!isMarried);

// let educated = true;
// console.log(educated);

// console.log(!educated);


// ==, ===
// == : compare the value
// === : compare value & type

// let number1 = 6;
// let number2 = '6';

// console.log(number1==number2);
// console.log(number1===number2);


// console.log(7=='7');
// console.log(7==='7');

// Operators - arithmetic : +, -, *, /, % (Modulo), ** (exponent)


// let num = 13;
// console.log(13 % 5);


// console.log(2**3);

// console.log(3**2);

// Comparison Operators : > , < , >=, <=, ==, ===
// console.log(5>3);
// console.log(5<3);
// console.log(10>=10);
// console.log(8<=7);


// if statement
// let age = 20;

// if(age>=18){
//     console.log('you are eligible to vote!, your age is ' + age );
// }

// age = 17;
// if(age>=18){
//     console.log('you are eligible to vote!');
// }
// if(age<18){
//     console.log('You are not eligible to vote!');
// }


// if-else

// let age = 17;

// if(age>=18){
//     console.log('You are eligible to vote!');
// }else{
//     console.log('You are not eligible to vote!');   
// }

// if-else-if 

// let dice = 3;

// if(dice===1){
//     console.log("you got one");
// }else if(dice===2){
//     console.log("You got two");
// }else if (dice===3){
//     console.log("Ypu got three");
// }
// else if (dice===4){
//     console.log("You got four");
// }else if (dice===5){
//     console.log("Ypu got five");
// }else{
//     console.log("You got six");
// }


// switch

// let dice= 7;

// switch(dice){
//     case 1:
//         console.log("You got 1");
//         break;
//     case 2:
//         console.log("you got two");
//         break;
//     case 3:
//         console.log("you got three");
//         break;
//     case 4:
//         console.log("You got four");
//         break;
//     case 5:
//         console.log("You got five");
//         break;
//     case 6:
//         console.log("You got six");
//         break;
//     default:
//         console.log("Invalid dice rolled");
// }

// logical operators - &&, ||

// let firstName = "peter";
// let age = 45;

// if(firstName == "john" && age===45){
//     console.log("Entry allowed");
// }else{
//     console.log("entry rejected");
// }



// let firstName = "peter";
// let age = 45;

// if(firstName == "john" || age===45){
//     console.log("Entry allowed");
// }else{
//     console.log("entry rejected");
// }

// ternary operator
// let age = 15

// condition ? if condition is true : if condition is false 

// age>=18 ? console.log("you are eligible to vote!") : console.log("you are not eligible to vote!");


// non-primitive data types : objects -> 
// objects, arrays, functions

// arrays
// let friend1 = "peter";
// let friend2 = "john";
// let friend3 = "anna";

// console.log(friend1);
// console.log(friend2);
// console.log(friend3);

// let friends = ["peter", "john", "anna", "robert", 25, true, null, undefined];
// // console.log(friends);

// console.log(friends[2]);
// console.log(friends[5]);
// console.log(friends);

// friends[3] = 'rohit';
// console.log(friends);

// console.log(friends.length);

// // adding new item to the array at the end
// friends.push(100);
// console.log(friends);


// // removing item from the end of the array
// friends.pop();
// friends.pop();
// friends.pop();
// console.log(friends);


// // adding item at the start of the array
// friends.unshift("banana");
// friends.unshift("kiwi");
// friends.unshift("guava");
// console.log(friends);


// // removing item at the start of the array
// friends.shift();
// friends.shift();
// friends.shift();
// friends.shift();
// console.log(friends);

// console.log(friends.includes('rohit'));
// console.log(friends.indexOf('anna'));



// Objects
// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 45,
//     isMarried : true,
//     education : false,
//     address : {
//         city : "Mumbai",
//         zip : "400001"
//     }
// }

// console.log(person);
// console.log(person.age); //dot notation
// console.log(person["age"]); //bracket notation

// console.log(person.address.city);

// person.age = 60;

// console.log(person);



// Functions

// console.log("Hello, king charles burger VI");
// console.log("Hello, king charles burger VI");
// console.log("Hello, king charles burger VI");

// // declaring the function - function declaration
// function greet(){
//     console.log("Hello, king charles burger VII");
//     console.log("Hello, prince charles burger VIII");
// }

// greet() //invoking the function
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()

// function greet(name){
//     console.log("Hello friend, " + name);
// }


// greet("anna")
// console.log("some code");

// greet("rohit")


// // function expression - NOT hoisted
// const greet = function(){
//     console.log("Hello!");
// }


// greet();


// arrow function
// const greet = () =>{
//     console.log("Hello!");
// }

// greet();



// function add(num1, num2){
//     const sum = num1 + num2;
//     console.log(`Sum is ${sum}`);
// }

// add(50, 100);


// function mult(num1, num2){
//     const mult = num1 * num2;
//     return mult;
// }


// let result = mult(10, 20);
// console.log(result+100);

// console.log(result);


// const add = (num1, num2) => num1 + num2;
// console.log(add(10,20));


// const greet = name => console.log("Hello " + name);
// greet("Banana")



// Loops - "Loop helps us repeat a block of code until the condition becomes false"

// // for loop

// let i;
// // initialization, condition, inc/dec
// for (i=0; i<6; i+=2){
//     console.log(i);
// }

// console.log("loop is not here");


// while loop - runs until condition becomes false

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// const fruits = ["apple", "banana", "mango", "guava", "grapes", "strawberry"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);


// let i;
// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// const fruits = ["apple", "banana", "mango", "guava", "grapes", "strawberry"];
// // do...while
// // Runs AT LEAST once.

// let n=10;

// do{
//     console.log(n);
//     n++;
// }while(n<=5)

// console.log("check with while loop");

// while(n<=5){
//     console.log(n);
//     n++;
// }



// const users = [
//     {name : "Asha", age : 22},
//     {name : "ravi", age : 30},
//     {name : "Meera", age : 27}
// ]

// let i = 0;

// for(i; i<users.length; i++){
//     console.log(`${users[i].name} is ${users[i].age} years old!`);
// }


// const nums = [5,6,7,8];

// for (let i=0; i<nums.length; i++){
//     console.log(nums[i]*2);
// }


// count how many numbers are >10
const nums = [5, 12, 17, 2];

let count = 0;

for(let i=0; i<nums.length;i++){
    if(nums[i]>10){
        count++;
    }
}

console.log(count);
