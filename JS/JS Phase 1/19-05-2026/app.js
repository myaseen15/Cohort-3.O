// console.log('Hello');
// console.warn('hello ');
// console.error('hello');
// console.table([10,20,30])

// var a ==> decalration 
// a = 20 ===> initialization 

// var a = 20;
// var b = 30;

// console.log(a + b);

// var str = "Hey I am Yaseen";
// console.log(str);


// Data Types 

// - Primitive
// - Number
// - String
//    - Boolean
//    - undefined
//    - Null
//    - BigInt
//    - Symbol

// - Non- Primitive (Reference)
//     - Array  
//     - Functions
//     - Object



// alert("hellooooooooo") - message deta hai 
  // confirm('Are you sure?') - sawal puchta hai haan ya naa 

//  var user =  prompt("Enter your Name");

//  console.log(user);

// var num1 = prompt("Enter Number 1")
// var num2 = prompt("Enter Number 2")

// console.log(num1 + num2);
// console.log(num1 - num2);


// Type Coercion 

// - Implicit
// - Explicit
 
// var a = '10';
// var b = '20';

// console.log(a)

// var a2 = Number(a)
// console.log(a2)
// console.log(a*b);

// var number = 20;
// var str = String(number)
// console.log(typeof str);


// var pro1 = Number(prompt('Enter first num'))
// var pro2 = Number(prompt('Enter sec num'))

// console.log(pro1 + pro2)


// Binary Operators 

// - Arthematic
// - Assignment
// - Logical 
// - Camparision operators 
// - Increment and Decrement  

// console.log(10+20)

// Increment operator 

// var a = 10;
// console.log(a++)
// console.log(++a)
// a++;
// console.log(a);

// decrement operator 

// var b = 10;
// b--;
// b--;
// console.log(b);

// var n = 10;
// n = n + 5;
// n += 2

// console.log(n);


// Camparision Operator 

// var a = 5;
// var b = 5;

// camparison operator 
// console.log(a == b)  // it does not check data type it check value loose camparison 
// console.log(a === b)  // it  check data type and it check value strike camparison
// console.log(a != b)
// console.log(a > b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a >= b)


// Logical Operator 

// var a = 10;
// var b = 20;

// var c = 30
// var d = 40


// console.log(a > b && c < d);
// console.log(a > b || c < d);

// - conditionals 

// syntax

// var a = 20;
// var b = 30;

// if(a > b){
//   console.log('nice');
// }else{
//   console.log('Sahi hai')
// }

// var age = +prompt('Enter your age');

// console.log(typeof age);

// if(age >= 18){
//   console.log('You can give vote');
// }else{
//   console.log('You can not give vote');
// }

// var math = Number(prompt('Enter Math marks'));
// var physics = Number(prompt('Enter Physics marks'));
// var chemistry = Number(prompt('Enter chemistry marks'));

// var marks = (math + physics + chemistry ) / 3 ;

// console.log("Final Marks",marks);

// if(marks >= 85){
//   console.log('A++');
// }else if (marks >= 80){
//   console.log('A++');
// }else if (marks >= 70){
//   console.log("B+")
// }else if (marks >= 60){
//   console.log("C+")
// }else if (marks >= 33){
//   console.log("D+")
// }else{
//   console.log('Fail');
// }

// var gen = prompt('Enter Gender (M/F)')
// var age = +prompt('Enter your Age')



// if(gen == 'F'){
// if(age >= 18 && age <= 60){
//   console.log("You will get Rs:1500 per month")
// }else{
//   console.log('you are not eligible')
// }
// }else{
//   console.log('Not Allowed')
// }

// truthy
// falsy - 0, "", null, undefined, NaN, false

// if(0){
//   console.log("Truthy value")
// }else{
//   console.log('Falsy value')
// }

// console.log(10>15?'Hello':'Bye')

// var a = 10
// var b = 20

// a>b?console.log('ok'):console.log("not ok");



// var day = "";

// switch(day){
//   case "monday":
//     console.log("Today is", day);
//     break
//     case "tuesday":
//       console.log("Today is", day);
//       break;
//       default:
//         console.log('Sunday')
// }