
// let prices = [100,250,500,150,700];

// let find = prices.filter((val)=> val > 300 );

// console.log(find)

// let marks = [80,90,70,85,95];

// let checkAvg = marks.reduce((acc,val)=>{
//  return acc + val;
// },0); 

// var calculateAvg = checkAvg / marks.length;
// console.log(calculateAvg)

// let numbers= [1,2,3,2,4,2,5,1,1,1];

// let count = {};

// for(let i = 0; i < numbers.length; i++){

//   let num = numbers[i]
//   if(count[num]){
//     count[num]  = count[num] + 1
//   }else{
//     count[num] = 1;
//   }

// }

// let frequency = 0;
// let mostFrequent;

// for(let key in count){
//   // console.log(key, count[key])
//   if(count[key] > frequency ){
//     frequency = count[key];
//     mostFrequent = key
//   }
// }
// console.log(mostFrequent)
// console.log(frequency)

// let user = {
//   name:"Ali",
//   age:20
// }

// user.age = 21
// user.city = "Karachi";

// console.log(user)


// for(let [key,val] of Object.entries(user)){
// console.log(key,val)
// }


// let employees = {
//   aman:25000,
//   ritik: 60000,
//   priya: 45000
// }

// let higestSalary = employees.aman;
// let highestEmployee ;
// for(let key in employees){
//   // console.log(key,employees[key])
//   if(employees[key]  > higestSalary){
//     higestSalary = employees[key];  
//     highestEmployee = key

//   }
// }

// console.log(higestSalary)
// console.log(highestEmployee)


  // function greet(name){
  //   console.log("Hello " ,name )
  // }
  // console.log("Yaseen")

  // let inp = +prompt('Enter your product price to get 10% discount')

  // function calDiscount(price){
  //   const discountPrice  = 500 * (10 / 100);
  //   return price - discountPrice;
  // }

  // console.log(calDiscount(inp))

  // function sum(...numbers){
  //   let calSum = numbers.reduce((acc,value)=>{
  //     return acc + value;
  //   },0)

  //   return calSum
  // }

  // console.log(sum(1,2,3,4,5,5,10));

  // let users = [
  //   {name :"Zohan",age:20},
  //   {name :'Amir', age:16},
  //   {name:"Zoya", age:25}
  // ];

  // function getAdult(usersArr){
  // let newArr = usersArr.filter((val)=>{ 
  //    let getObj = val.age >= 18 ;
  //    return getObj
  //   })
  //   return newArr

  // }

  // console.log(getAdult(users))

  let cart = [
    {name:"Mouse",price:500,qty:2},
    {name:"Keyboard",price:1000,qty:1},
    {name:"Monitor",price:10000,qty:1},
  ]

// function getCartTotal(calc){
//   let res = calc.reduce((acc , val)=>{
//  return acc + (val.price * val.qty)
    
//   },0);
//   return res
// }

// console.log(getCartTotal(cart))


// let arr = [1,2];

// let res = arr.reduce((acc,item)=>{
// return acc + item
// })

// console.log(res)

// let nums = [10, 20, 30];

// nums.reduce((acc, val) => {
//   console.log("acc:", acc, "val:", val);
//   return acc + val;
// });


// let students = [
//   {
//     name:"Ritik",
//     marks:[80,90,85]
//   },
//   {
//     name:"Aman",
//     marks:[50,40,60]
//   }
// ];


// function generateReport(students){

//   let studentReport = students.map((student)=>{
//   let totalMarks = student.marks.reduce((acc,val)=>{
//     return acc + val
//    },0)

//    let avg = totalMarks / student.marks.length; 
//   //  console.log(avg)
//    let grade = "";
//    if(avg >= 80){
//     grade = "A"
//    }else if(avg >= 65){
//     grade = "B"
//    }else if(avg >= 50){
//     grade = "C"
//    }else{
//     grade = "Fail"
//    }
   
//   return {
//     name:student.name,
//     average:avg,
//     grade:grade
//   }
//   })
// return studentReport
// }

// console.log(generateReport(students))

let books = [
  // {
  //   id: 1,
  //   title: "Atomic Habits",
  //   author: "James Clear",
  //   borrowed: false
  // },
  // {
  //   id: 2,
  //   title: "Deep Work",
  //   author: "Cal Newport",
  //   borrowed: true
  // },
  // {
  //   id: 3,
  //   title: "The Pragmatic Programmer",
  //   author: "Andrew Hunt",
  //   borrowed: false
  // },
  // {
  //   id: 4,
  //   title: "Clean Code",
  //   author: "Robert C. Martin",
  //   borrowed: false
  // },
  // {
  //   id: 5,
  //   title: "Eloquent JavaScript",
  //   author: "Marijn Haverbeke",
  //   borrowed: true
  // }
];



let body = document.body;
let createBorrowBtn = document.createElement('button')


body.append(createBorrowBtn)

createBorrowBtn.textContent = "Borrow Book" 



function addBook(title,author){
books.push(
  {
  id:books.length +  1,
  title,
  author,
  borrowed:false
}
)
}


addBook("Java","Mark Guptil")
addBook("Java","Mark Guptil")



function borrowBook(id){
let book = books.find(elem => elem.id === id ) 

 if(book){
  book.borrowed = true
 }
 return book
}
  

borrowBook(1)
// console.log(borrowBook(100))



function showAvailableBooks(books){
  let res = books.filter(elem =>  !elem.borrowed)
  return res
}

let isAvail = showAvailableBooks(books)
console.log(isAvail)

function returnBook(id){
  let book = books.find(elem=> elem.id === id)
  
  if(book){
    borrowed = false
  }

}

returnBook(1)