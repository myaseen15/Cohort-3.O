


// var obj = {
//   name: "Yaseen",
//   age:19,
//   city:"Karachi"
// }

// console.log(obj)  
// console.log(obj.name)  
// console.log(obj.age)  
// console.log(obj.city)  

// var obj = {
//   model : "iPone 17 Pro",
//   price: 100000,
//   color: "Black",
//   isGood: true
// }


// console.log(obj)

// var obj = {
//   true: 20,
//   0:40
// }

// console.log("It treat obj keys as a string ")


// var user = {
//   name:"Ali",
//   age:19,
//   marks: 70,
//   isSingle: true,
//   batch:'Cohort 3.O'
// }


// console.log(user.batch)

// user.city = 'Lohore'
// user.marks = 30
// console.log(user.city)
// delete user.age
// delete user.batch


// // console.log(user)

// // console.log(Object.keys(user)) // it return object keys in the form of an array ; 

// // console.log(Object.values(user)) // it return object values in the form of an array ;

// console.log(Object.entries(user)) // it also return object key and value in the from array of array


// var obj = {
//   name: 'Yaseen',
//   age: 20
// }

// obj.age = 31;
// obj.city = 'Karachi'

// console.log(obj) 
// delete obj.city

// console.log(Object.keys(obj))
// console.log(Object.entries(obj))
// console.log(Object.values(obj))


// var username = prompt("Enter Name");
// var age = +prompt('Enter Age')
// var city = prompt("Enter City");;

// var obj = {
//   username,
//   age,
//   city
// }

// console.log(obj)


// var user = {
//   name:'Babar Azam',
//   age:31,
//   team:"Pakistain",
//   isMarried:false,
//   skills:['Batting',"Dancing",'Fielding'],
//   spouse:{
//     name:"Hania Amir",
//     profession:"Acting",
//     age:29
//   }
// }

// console.log(user.name)
// console.log(user.age)
// console.log(user.team)
// console.log(user.isMarried)
// console.log(user.skills)
// console.log(user.skills[2])
// console.log(user.spouse.name)
// console.log(user.spouse.profession)


// let user1 = {
//   name: "Hassan",
//   age:18,
//   isHandsome:false,
//   skills:['Html','Css','JS'],
//   college:{
//     name:"DJ College",
//     totalStudent:3400,
//     courses:['Web Development','Data Science']
//   }
// }

// console.log(user1.college.courses[0])


// var obj = {
//   name:"Neura",
//   ram:'25mb',
//   age:2,
//   isWorking:true,
//   skills:['fight','walk','dance'],
//   creator:{
//     name:'Elon Musk',
//     age:44,
//     isIntelligent:true,
//   },
//   sayHi:function(){
//     console.log("Hello I am Neura Robo")
//   }
// }


// var obj = {
//   user:'Jani',
//   greet:function(a){
//     console.log('Good Morning' , a)
    
//   }
// }

// // object ke andar function banane ko method kehte hai  
// // console.log(obj.greet())
// obj.greet('Rizwan')



// var maths = {
//   add:(a,b)=>{
//     return a + b;
//   },
//   square:(a)=>{
//    return a*a;
//   },
//   cube:(a)=>{
//     return a*a*a;
//   },
//   mul:(a,b)=>{
//     return a * b
//   },
// }

// console.log(maths.add(20,30))
// console.log(maths.square(2))
// console.log(maths.cube(2))
// console.log(maths.mul(2,5))


// console.log(console.log('hello'))

// var myAge = 32;

// var obj = {
//   name:'Yaseen',
//   age:myAge > 25 ? myAge : 19
// }

// console.log(obj);

// var arr = [10,20,30];

// arr[-1] = 40;
// arr['name'] = 40;

// console.log(arr)


// var user = {
//   name:"Ali",
//   city:"Lahore"
// }

// // user.name = 'aman';
// user["name"] = 'aman';

// console.log(user)

// array => object, sequential , push
// array => object, named / define data 


// var obj = {
//  name:"Shaheen",
//  age:24
// }


// obj['city'] = "Peshawar"


// const groom = {
//   name:'salman',
//   age:40
// }

// groom.name = 'Wasay';

// // const bride = {
// //   name:'Zara',
// //   age:32
// // }


// console.log(groom.name, 'weds',bride.name)  



// const user = {
//   name:"Ismail",
//   age:29,
//   city: "Multan"
// }

// Object.seal(user) // it's object method where u can update u object data but not add and delete from your object

// user.name = "Zaman";
// user.isPlayes = true;  // seal method will not delete and add data into object
// delete user.age        // seal method will not delete and add data into object   

// console.log(user)

const obj2 = {
  name:"Moosa",
  age: 50,
  city:"Hyderabad"
}

// console.log(obj2['name'])
// Object.freeze(obj2) // it's object method in which u can't modify/update and delete and create into your object

// obj2.skill = "Web development" // don't not add data when your object is freez
// delete obj2.age  // don't delete data from object when your object use freez method

// obj2.name = "Awais" ; //  don't not update your object data when object freez method applied on object
// console.log(obj2) 

// const arr = [10,20,30];

// // Object.seal(arr);
// // 
// // arr.push(40)
// // arr[1] = 15
// // arr.pop()

// delete arr[2]

// console.log(arr)

// const arr = [10,20,30];

// Object.freeze(arr);

// arr.push(40)
// arr[1] = 15
// arr.pop()

// delete arr[2]

// console.log(arr)

// distructuring

// var arr = [11,22,33,44];


// // var a = arr[0]
// // var b = arr[1]

// var [a,b,c,d] = arr

// console.log(d)

// var arr = ["ali","Mubeen","shezi",'zain','ahmar','babar'];

// var [a,b,...c] = arr;

// var obj = {
//   name:'Asim',
//   age:22,
//   batch:"Cohort 3.O"
// }


// var {a,b} = obj ; // In the left side {} you have to write same object key for destructure

// var {name,...c} = obj

// console.log(name)

// console.log(obj)
// var arr = [10,20,30]

// var [x,y] = arr;

// // console.log(arr)

// console.log(x)
// console.log(y)

var arr = [10,20,30,40];

// var arr2 = arr


// arr2.push(60)
// console.log(arr2)
// console.log(arr)

// var arr2 = [arr[0],arr[1],arr[2],arr[3]]; instead of writing this i do this example below 
// var arr2 = [...arr]
// arr2.push(60)
// console.log(arr2)
// console.log(arr)


var obj = {
  
}