
// let marks = [80,90,70,85,95];


// let total = marks.reduce((acc,current)=>{
// return (acc + current) ;
    
// },0)


// const avg = total/ marks.length;
// console.log(avg)


// let number = [1,2,3,2,4,2,5,1,1,1];

// let count = {}

// for(let i = 0; i < number.length; i++){
//     let num = number[i];
//     // console.log(num)
//     count[num]
//     if(count[num]){
//         count[num] += 1
//     }else{
//         count[num] = 1;
//     }
// }

// let frequency = 0;
// let mostFrequent ;
// for(let key in count){

//     console.log(count[key])
// //     if(count[key] > frequency){
// //         frequency = count[key];
// //         mostFrequent = key;
// //     }
// }
// // console.log(count)

// console.log(mostFrequent)
// console.log(frequency)

// let user = {
//     name:"Yaseen",
//     age:19
// }

// user.age = 20;
// console.log(user)

// let user = {
//     name:"Ali",
//     age:20,
//     city:"Karachi"
// }

// for(let key in user){
//     console.log(`${key} ${user[key]}`)
// }

// for(let [key,value] of Object.entries(user)){
//     console.log(key , value)
// }

// let employees = {

// }


// function greet(name){
//     console.log( "Hello " + name)
// }

// greet("yaseen")

// let sum = 0
function sum(...number){
    return number.reduce((acc,val))=> {acc + val}
}

console.log(sum(10,20,30,40))