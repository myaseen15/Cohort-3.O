// // Qno 1
// function greet(){
//   console.log("Hello World");
// }

// greet()

// // Qno 2

// function add(a,b){
//   return a + b;
// }

// var sum = add(20,30)

// console.log(sum)


// function sqr(a){
//   return a*a;
// }

// var sqr = sqr(2);
// console.log(sqr)

// function getFahrenheit(cal){
//   return (cal * 9/5) + 32
// }

// var fahrenhiet = getFahrenheit(37);

// console.log(fahrenhiet)

// function sayHi(a = "Guest"){
//   console.log("Welcome",a)
// }

// sayHi("yaseen")
// sayHi()

// function greater(a,b){
//   if(a>b){
//     return a 
//   }


//   if(b>a){
//     return b 
//   }
//   return "Both numbers are equal"
// }

// console.log(greater(50,40))
// console.log(greater(20,40))
// console.log(greater(20,20))

// function areaOfRectangle(w,l) {
//   return w * l
// }

// var areaOfRectangle = areaOfRectangle(5,10)
// console.log(areaOfRectangle)

// function isAdult(age) {
//   return age >= 18 ? "Adult": "Minor";
// }

// var age = isAdult(10)

// console.log(age)

// function reverseStr(str){

// }

// var str = "se";

// var reverse = "";

// for(let i = str.length -1; i >= 0 ; i--){
//   reverse += str[i]
// }

// console.log(reverse)

// for(let i = 0; i < str.length; i++){
//   reverse = str[i] + reverse
// }

// console.log(reverse)

// function reverseStr(str){
//   var reverse = "";
//   for(var i = str.length -1; i >= 0; i--){
//     reverse += str[i];
//   }
//   return reverse;
// }

// console.log(reverseStr('Hello'))


// const myFunc = function(){
//     return "JavaScript";
// };

// console.log(typeof myFunc);

// const add = (a,b) => {
//   a + b;
// };

// console.log(add(2,3));

// function check(age) {
//   if(age < 18) return;
//   return "Allowed";
// }

// console.log(check(16));

// const arr = [1,2,3,4];

// console.log(arr.slice(1,3));

// const arr = [1,2,3];

// arr.splice(1,1);

// console.log(arr);

// console.log(
//   [1,2,3].includes("2")
// );

// const arr = [1,2,3,4];

// const result = arr.filter(num => num > 2);

// console.log(result);

// Intermediate Level 

// let multi = function(a,b){
// return a * b;
// }

// console.log(multi(10,3))

// function add(a,b){
//   return a * b;
// }

// var addfn = add(10,2)

// console.log(addfn)

let add = (a,b)=>{
return a * b;
}

console.log(add(10,2))

// function test(a,b){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }

// test(100,200);