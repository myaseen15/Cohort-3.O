
// const user = {
//   name:"Ritik",
//   greet(){
//     console.log(`Hello ${this.name}`)
//   }
// }

// user.greet()

// console.log(this)

// "use strict"

// function foo() {
//   this.name = "yaseen";
//   console.log(this)
// }

// foo()

// function introduce(){
//   console.log(this.name)
// }


// const person = {
//   name:"Ali"
// }

// introduce.call(person)

// function introduce(city,country){
//   console.log(`${this.city} ${this.country}`)
// }

// const person = {
//   name:"Umar"
// }
// introduce.apply(person,["Bhobal"])

// const animal = {
//   eats:true,
// }

// const dog = Object.create(animal)

// console.log(dog.eats)

// class Students {
//   constructor(name,marks) {
//     this.name = name;
//     this.marks = marks;
//   }
//   getGrade(){
//     if(this.marks >= 90){
//       return "A"
//     }
//   else if(this.marks >= 70){
//       return "B"
//     }
//     else if(this.marks >=60){
//       return "C"
//     }
//     else {
//       return "Fail ho gya"
//     }
    
// }
// }


// const std1 = new Students("Zoyan" , 100)
// const std2 = new Students("Zain" , 40)
// const std3 = new Students("Zoya" , 70)

// console.log(std1.getGrade())
// console.log(std2.getGrade())
// console.log(std3.getGrade())

// class Employee {
//   constructor(name,salary) {
//     this.name = name;
//     this.salary = salary
//   }

//   work(){
//     console.log(`${this.name} is working`)
//   }
// }

// class Developer extends Employee {
//   constructor(name,salary) {
//     super(name,salary)
//   }
//   code(){
//   console.log(`${this.name} is coding....`)
//   }
// }

// const dev1 = new Developer('Ali Khan', 200000);

// dev1.work()
// dev1.code()

class BankAccount {
  #balance = 0

  deposit(amount){
    if(amount >= 0){
      this.#balance += amount;
      return `${amount} deposit Successfully`;
    }else{
      console.log("Amount deposit nhi ho sakthi increase balance")
    }
    
  }
  withDraw(amount){
    if(amount <= this.#balance){
      this.#balance -= amount 
      return `${amount} withdraw Successfully`;

    }else{
      console.log("insufficiant balance")
    }
  }
  getBalance(){
    return `Your Balance is ${this.#balance}`
  }
}


const account = new BankAccount()

console.log(account.deposit(1000));
console.log(account.withDraw(300));
console.log(account.getBalance())