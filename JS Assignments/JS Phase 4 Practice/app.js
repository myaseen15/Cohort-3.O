
// function showThis(){
//   console.log(this)   // window object
// }

// showThis()


  // "use strict"

  // function withStrict(){
  //   // console.log(this)   // undefine
  //   console.log(this === window)
  // }

  // withStrict()


//   var name = "Yaseen";

// function hello() {
//   console.log(this.name);
// }

// hello();


// "use strict";

// var name = "Global";

// function showName() {
//   console.log(this.name);
// }

// showName();

// function greet() {
//   console.log(this.name);
// }

// const person1 = {
//   name: "Yaseen",
//   greet
// };

// const person2 = {
//   name: "Ali",
//   greet
// };

// person2.greet()

// const user = {
//   name: "Yaseen",

//   greet: function () {
//     console.log(this.name);
//   }
// };

// const another = {
//   name: "Ali"
// };

// another.greet = user.greet;

// another.greet();


// const user = {
//   name:"Yaseen",
//   sayHello:function(){
//     console.log("Hello " + this.name)
//   }
// };

// var fn = user.sayHello;

// fn()



// const company = {
//   name: "Google",

//   employee: {
//     name: "Yaseen",

//     greet:()=> {
//       console.log(this.name);
//     }
//   }
// };

// company.employee.greet();


// const user = {
//   name: "Yaseen",

//   greet() {
//     function inner() {
//       console.log(this);
//     }

//     inner();
//   }
// };

// user.greet()


// const user1 = {
//   name:"Rahul",
//   sayHi(){
//     console.log(this)
//   }
//   ,
//   sayHello:()=>{
//     console.log(this)
//   }
// }


// user1.sayHi()
// user1.sayHello()

  