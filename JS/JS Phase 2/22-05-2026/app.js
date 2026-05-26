

// function abc(){
//   console.log("hello");
// }

// function walk(){
//   console.log("Walking...")
// }
// function sing(){
//   console.log("Singing...")
// }
// function dance(){
//   console.log("Dancing...")
// }

// walk()
// sing()
// dance()
// sing()

// walk()
// dance()

// function greet(name){
//   console.log("Good Evening..." , name);
// }

// greet("Raja")
// greet("zohan")

// function add(a,b){
//   console.log(a + b)
// }

// add(30,50)

// function mul(a,b){
//   console.log(a * b)
// }

// mul(10,5)

// function greetUser(user,age){
//   console.log("Good Morning...", user)

//   if(age >= 18){
//     console.log("your are welcome in the party")
//   }else{
//     console.log("Not Allowed")
//   }
// }


// greetUser("Yaseen",19)
// greetUser('Babar Azam', 31)


// types of functions 

//  function declaration 

// the normal way of declear a function is called function declearation 

// function a1(){
//   console.log("Hello guys...")
// }

// a1();

// function Expression 

// This is function Expression and also known as first class function because it's made with variable as a varibale

// var foo = function(){
//   console.log("This is Function Expression")
// }

// foo()

// Arrow Function 

// var  foo2 = ()=>{
//   console.log("Arrow Function")
// }

// foo2()

// Arrow Function one liner function 

// var foo3 = ()=> console.log("hello this is one liner function")


// foo3()

// b()

// var b = function(){
//   console.log("hellooooooooooooooo")
// }

// IIFE 
// Immidiatelyl Invoke Function Expression 

//  (function(){
// console.log("This is IIFE")
// })()


// let and const is a block scope
// if(true){
//   var a = 10;
//   console.log(a)
// }
// console.log(a)


// var is a function scope
// function check(){
//   var a = 30;
// console.log(a)
// }
// check()
// console.log(a)

// (()=> console.log("hello"))() // this is also IIFE 

// function aaa(){
//   console.log('hello')

//   var a = 10;
//   var b = 20;
//   var c = a + b;

//   return a;
// }

// console.log(aaa())


// function abc(){
//   console.log("hahahahaha")
// }

// var ret = abc();

// console.log(ret)

// function hero(){
//   var a = 10;
//   var b = 20;
//   var c = a + b;

//   return c;
// }

// console.log(hero())


// function permission(gen){
//   if(gen === 'F'){
//     return "Welcome to Female Party"
//   }else{
//     return"Welcome to Men Party"
//   }
// }
// console.log(permission('F'))


// function add(a,b){
//   return a + b
// }

// console.log(add(10,30))

// pure functions 

// function sqrt(a){
//   return a*a
// }

// console.log(sqrt(5))
// console.log(sqrt(10))


// impure functions

// var score = 0
// function impureFunc(){
//   score++
//   return score
// }

// console.log(impureFunc())
// console.log(impureFunc())

// function abc(a,b){
//   console.log("Hello guys" , a,b)
// }

// abc(10)

// function greet(user = 'Sir'){
//   console.log("Welcome", user)
// }

// greet('Yaseen')
// greet('Mubeen')
// greet()

// function callBack(){
//   console.log("This is call back")
// }

// function main(a){
//   console.log("main Function")
// a()

// }

// main(callBack)


// function mainRoad( width ,cb){
//   console.log('This is Main road total width of road is ', width )
//   console.log(cb(width/10))
// }


// function sideRoad(f){
//   return "This is side Road  my width is ", f;
// }

// mainRoad(80,sideRoad)

// first class funtions 

// function parent(){
//   console.log("I am Parent....")

//   function child(){
//     console.log("I am Child...")
//     return 4
//   }
//  return child
// }


// var ans = parent()

// ans();

// // console.log(ans())



