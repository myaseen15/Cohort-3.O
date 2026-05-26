

// Console & Basics

// console.log("Hello JavaScript")

// console.log("Muhammad Yaseen", 19, "Karachi")

// console.warn("Danger site");

// console.error("Invalid Credential");

// console.table([1,2,3,4,5])

// Variables

// var studentName = "Muhammad Yaseen";

// var age = 19;

// var a = 20;
// var b = 40;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("value of a",a)
// console.log("value of b",b)


// const pi = Math.PI

// console.log(pi)

// var declare ;
// console.log(declare)

// var score = 5;

// score += 10;

// console.log(score)


// var firstName = "Muhammad";
// var lastName = "Yaseen";
// var fullName = "Muhammad Yaseen";

// var str = "Hello Js"; // string Data type

// var num = 2000; // number data type

// var a ; // when we declare variable but not give value by default it's value become undefine


// var und = undefined;

// var nulData = null;

// var identity = true ;

// console.log(typeof(str))
// console.log(typeof(num))
// console.log(typeof(a))
// console.log(typeof(und))
// console.log(typeof(nulData))
// console.log(typeof(identity))

// var mobileNumber = 3198145385;

// console.log(typeof(mobileNumber))



// var bigInt = 2000000000000000000000n
// console.log(bigInt)


// Type Conversion & Coercion

// var str = "50";
// var convertIntoNum = Number(str)

// console.log(convertIntoNum)

// var number = 100;
// var convertIntoStr = String(number);

// console.log(convertIntoStr)

// var bool = "true";

// var convertIntoBoolean = Boolean(bool)

// console.log(convertIntoBoolean)

// console.log("5" + 2)
// console.log("5" - 2)
// console.log(true + 1 )

// var val = Number("123abc");

// console.log(val)

// console.log(parseInt("500px"))

// Operators

// var num1 = 20;
// var num2 = 30;

// console.log("Total", num1 + num2)

// console.log("Reminder of 25 divide by 4 is",25 % 4)

// var sqr = 5
// console.log(sqr ** 2)


// var a = 10;
// a++

// var b = 20;
// b--

//  var a = 5;

//  a += 20;

//  console.log(a)


// var num1 = 10;
// var num2 = 30;

// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(20 >= 20)
// console.log(30 <= 40)


// var a = 30;

// var b = "30";

// console.log(a === b) // === check data types and value it check both value and data type strictly


// console.log(10 == "10")
// console.log(10 === "10")

// var first = true;
// var sec = false

// console.log(first || sec)
// console.log(first && sec)
// console.log(first != sec)

// Strings 

// var str = "This is string";

// console.log(str.length)

// var strConvert = "javascript";

// console.log(strConvert.toUpperCase())

//  var word = "Hello Everyone";

//  console.log(word.toLocaleLowerCase())

// var sentence = "JavaScript";

// console.log(sentence.includes("JavaScript"))

// var text = "Hello World";
// var res = text.slice(6)
// console.log(res)

// var sen = "She like to eat apple";

// var res = sen.replace('apple','mango')
// console.log(res)

// var skills = "HTML,CSS,JS";
// var skillsArr = skills.split(',')
// console.log(skillsArr )

// var extraSpace = " I Hate Python "
// console.log(extraSpace.length)
// console.log(extraSpace.trim().length)
// console.log(extraSpace.trim())

// var existSpace = " Hello                     Guys "
// console.log(existSpace)
// console.log(existSpace.length)
// var res = existSpace.replace(/\s+/g, " ").trim();
// console.log(res)
// console.log(existSpace.replace(/\s+/g, " ").trim().length)

// var rep = "Hi"
// console.log(rep.repeat(5))

// var sentence = "I am happy"

// console.log(sentence.charAt(0))

// var myName = "Muhammad Yaseen";
// var age = 19;
// var education = "Intermediate" 

// console.log(`I am ${myName} from Karachi, Pakistan. I am ${age} year old. My Qualification is ${education}`)


// Number & Math 
// var num = 4.8;
// console.log(Math.round(num))

// console.log(Math.sqrt(81))

// console.log(Math.max(19,30, 98, 9, 39,92))

// console.log(Math.floor(Math.random() * 10) + 1)

// console.log(parseInt('99.99'));

// console.log(Number.isInteger(25))

// const piValue = Math.PI
// console.log(piValue.toFixed(3))


// conditionals 

// var num = prompt("Enter both number positive or negative");

// if(num > 0){
//   console.log("positive")
// }else{
//   console.log("negative")
// }


// var checkEven = prompt("Enter any Number to check that either it's even or odd")
// if(checkEven % 2 === 0){
// console.log("Even Number")
// }else{
//   console.log("ODD Number")
// }

// var age = prompt("Enter your age ");

// if(age >= 18){
//   console.log("You are eligible for vote")
// }else{
//   console.log("You are not eligible for vote")
// }

// var num1 = 90;
// var num2 = 30
// var num3 = 120;

// if(num1 > num2){
//   console.log(num1)
// }else{
//   console.log(num2)
// }

// if(num1 > num2 && num1 > num3){
//   console.log(num1)
// }else if(num2 > num1 && num2 > num3){
// console.log(num2)
// }else{
//   console.log(num3)
// }

// var year = 2000;
// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//   console.log("Leap Year")
// }else{
//   console.log("Not Leap Year")
// }

// var num = 45;

// if(num % 3 === 0 && num % 5 === 0){
//   console.log( num + " Divisible by 3 and 5")
// }else{

//   console.log( num + " not Divisible by 3 and 5")
// }

// var math = +prompt("Enter your Math Marks"); 
// var physics = +prompt("Enter your physics Marks"); 
// var Chemistry = +prompt("Enter your Chemistry Marks"); 

// var avg = (math + physics + Chemistry) / 3

// if(avg >= 90){
//   console.log("Congratulation for A Grade")
// }else if(avg >= 70){
//   console.log("Good for B Grade")
// }else if(avg >= 50){
//   console.log("Good for C Grade")
// }else{
//   console.log("Fail Better luck for next time")
// }

// var letter = prompt("Enter your letter ").toLowerCase();

// // if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ){
// //   console.log(letter , "is a vowel letter")
// // }else{
// //   console.log(letter, "is a consonant character")
// // }


// // same thing with include method 

// if('aeiou'.includes(letter)){
//   console.log('Vowel Letter')
// }else{
//   console.log('consonant letter')
// }


// var num1 = +prompt('Enter num1')
// var operator = prompt('Enter operator for calculation')
// var num2 = +prompt('Enter num2')

// switch(operator){
//   case "+":
//   console.log(num1 + num2);
//   break;
//   case "-":
//     console.log(num1-num2)
//     break;
//     case "*":
//     console.log(num1*num2)
//     break;
//     case "/":
//     console.log(num1 / num2)
//     break;
//     case "%":
//     console.log(num1 % num2)
//     break;
//   }


// var day = +prompt('Enter the day name based on a number (1–7).');

// switch(day){
//   case 1:
//   console.log("Monday");
//   break;
//   case 2:
//   console.log("Tuesday");
//   break;
//   case 3:
//   console.log("Wednesday");
//   break;
//   case 4:
//   console.log("Thursday");
//   break;
//   case 5:
//   console.log("Friday");
//   break;
//   case 6:
//   console.log("Saturday");
//   break;
//   case 7:
//   console.log("Sunday");
//   break;
// }

// let username = prompt('Enter Username');
// let password = +prompt("Enter Password")

// if(username === 'admin' && password === 1234){
//   console.log("Welcome to admin panel")
// }else{
//   console.log("Invalid Credential")
// }

// Truthy & Falsy

// console.log(!!"Hello")
// console.log(!false)
// console.log(!true)

// var emp = ""
// var n = 0

// console.log(!!emp)
// console.log(n  ,'is a',!!0)

// OR

// if(emp){
//   console.log("Empty String is a","Truthy value");
// }else{
//   console.log("Empty String is a","Falsy value")
// }

// if(n){
//   console.log(n, "is a truthy value")
// }else{
//   console.log(n, "is a false value")
// }

// var arr = [];
// if(arr){
//   console.log(arr,"is a Truthy")
// }else{
//   console.log(arr,"is a Falsy")
// }


// var data = "" ? console.log("Valid"):console.log('Invalid');

// var num = +prompt("Enter number to check weather it's Even or Odd");

// console.log((num%2===0)?"Even":"Odd");

// var age = +prompt('Enter your age');

// console.log(age > 18 ? "Your age is Above 18": "Your age is Below 18")

// var num1 = +prompt("Enter number num1")
// var num2 = +prompt("Enter number num2")

// console.log(num1 > num2 ? num1 + " is greater": num2 + " is greater")

// Mixed Practice Questions

// var myName = "Muhammad Yaseen";
// var age = 19;
// var education = "Intermediate";
// var course  = "Mern Stack + Gen AI";
// var city = "Karachi";

// console.log(`I am ${myName}. I am ${age} year old I live in ${city}. My Qualification is ${education} I am currently learning ${course}`);


// var length = 20;
// var width = 20;

// var area = length * width;

// console.log(area)

// var principle = 3000000;
// var rateOfMarkup = 5;
// var time = 20;

// var SI = (principle * rateOfMarkup * time)/100;
// console.log(SI)


// var celsius = 32;
// var fahrenheit = (celsius * 9 / 5) + 32;

// console.log(fahrenheit+"°F")
 

// var kilometer = 10;

// var meter = kilometer * 1000;

// console.log(meter)

// var sub1 = +prompt("Enter your Math Marks ");
// var sub2 = +prompt("Enter your English Marks ");
// var sub3 = +prompt("Enter your Urdu Marks ");
// var sub4 = +prompt("Enter your Physics Marks ");
// var sub5 = +prompt("Enter your Computer Marks ");

// var obtMarks = sub1 + sub2 + sub3 + sub4 + sub5;
// var totalMarks = 500;

// var percentage = (obtMarks * 100) / totalMarks 

// console.log(percentage+"%")

// var units = 100;
// var bill = 0;

// if(units <= 100){
//   bill = units * 10;
// }else if(units <= 200){
//   bill = (100 * 10) + ((units - 100)* 15 )
// }else if(units <= 300){
//   bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
// }

// console.log("Electricity bill", bill)

// var userName = "yaseen";
// var birthYear = 2006;

// console.log(userName+birthYear)

// var str = "Ali".toUpperCase();

// console.log(str.startsWith('A'))

// var sent = "I love Cricket";

// console.log(sent.split(' ').join('').length)


// Logical Thinking Questions

// var num1 = 10
// var num2 = 22

// console.log(num1 > num1 ? num1 + " is greater" : num2 , "is greater");

// var num = +prompt("Enter number")

// if(num > 10 && num < 50  ){
// console.log("Number is between 10 and 50")
// }else{
//   console.log("Number is not between 10 and 50")
// }

// var pass = "abc123456"
// if(pass.length < 8){
// console.log("password length is shot")
// }else{
//   console.log("Valid Password")
// }

// var age = prompt("Enter Your Age")
// var hasLicense = true;

// if(age >= 18){
//   if(hasLicense){
//     console.log("You can drive")
//   }else{
//     console.log("You can't drive")
//   }
// }else{
//   console.log("You are under 18")
// }

// var num = prompt("Enter number")


// if(num % 2 === 0 && num % 3 === 0){
//   console.log('Number is divisible by 2 and 3')
// }else if(num % 2 === 0){
//   console.log("Number is divisible by 2")
// }
// else{
//   console.log("Number is divisible by 3")
// }

// var time = +prompt("Enter your current time");

// if(time >= 5 && time  < 12){
//   console.log("Good Morning")
// }else if(time === 12){
//   console.log("Good Noon")
// }else if(time > 12 && time < 17){
//   console.log("Good Afternoon")
// }else if(time >= 17 && time < 21){
//   console.log("Good Evening")
// }
// else{
//   console.log("Good Night")
// }


// let a;

// let b = null;

// console.log(a == b)


// var num = +prompt("Enter number")

// if(num % 10 === 0){
//   console.log(num,"is a Multiple of 10")
// }else{
//   console.log(num,"is not a multiply of 10")
// }


// var price = +prompt('Enter your item actual price');

// var discount = +prompt("How many percent do You need to get discount enter number");

// var discountAmount = price * discount / 100;

// var finalPrice = price - discountAmount;

// console.log(finalPrice)

// var stoke = ["keyboard","mouse","laptop"];
// var checkStoke = prompt("find items")

// var checkItem = false;

// for(let i = 0; i <= stoke.length -1; i++){

//   if(stoke[i] === checkStoke){

//     checkItem = true
   
//   }
// }

// if(checkItem){
//    console.log(`${checkStoke} is available`)
//   }else{
//     console.log(`${checkStoke} is not available`)
// }


// var product = prompt("Enter product Item");

// var productArr = ["keyboard","mouse","laptop","mobile","book"]

// var findInd = productArr.indexOf(product)

// var isQuantity = [10,20,40,50,0];


// if(findInd   !== -1 ){
//   if(isQuantity[findInd] > 0){
//       console.log(`${product} is in stock`);
//     }else{
//         console.log(`${product} is out of stock`);
//       }
//     }else{
//       console.log(`${product} is not available`)
//     }


  // var unitConsume = 30;
  // var bill = 0
  // if(unitConsume <= 100){
  //   bill = (unitConsume * 10)
  // }else if(unitConsume <= 200){
  //   bill  = (100 * 10) + ((unitConsume - 100) * 15)
  // }else if(unitConsume <= 300){
  //  bill  = (100 * 10) + (100 * 15) + ((unitConsume - 200) * 20);
  // }

  // var GST = 10;

  // var calcGST = bill * GST / 100;


  // console.log("Electricity Bill" , bill + calcGST )


  // Challenge Questions for Beginners

  // var randomNum = Math.floor(Math.random() * 9000) + 1000 

  // console.log(randomNum)


// var animal = "cat";

// console.log(animal.split('').reverse().join(''))

// console.log(animal[2]+animal[1]+animal[0])


// var str2 = "karachi";
//   console.log(str2[str2.length-1])

var fullName = "Muhammad Yaseen Khan";

// var profile = fullName.split(' ')[0][0] + fullName.split(' ')[1][0];

// console.log(profile.toUpperCase())

// var word = fullName.split(' ');

// console.log(word)

// var initials = "";

// for(let i = 0; i < word.length ; i++){
//  initials += word[i][0]
// }

// console.log(initials.toUpperCase())

// var init = fullName
// .split(" ")
// .map(word => word[0])

// console.log(init.join('').toUpperCase())

// var first = "Muhammad".toLowerCase()
// var sec = "muhammad".toLowerCase()

// console.log(first === sec)

var actualEmail = "yaseen123@gmail.com";
var actualPassword = "yaseen123@gmail.com";


var email = "yaseen123@gmail.com";
var password = "yaseen123@gmail.com";
