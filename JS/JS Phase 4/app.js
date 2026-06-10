
// console.log(this)

// let hero = {
//   fname : "Muhammad",
//   lname : "Yaseen",
//   getIntro:function(){
//     console.log(this)
//   }
// }

// hero.getIntro()

// Arrow Function does not have laxical object 

// default environment of this is window 


// function MakeStudents(fname,lname,contact,isVerified){
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;
//   this.isVarified = isVerified;
//   this.showProfile = function(){
//     if(this.isVarified){
//       console.log(`Student Name ${this.fname} ${this.lname}, Contact ${this.contact}`)
//     }else{
//       console.log(`User not Verified`)
//     }
//   }
// }


// let s1 = new MakeStudents("Ali","Usman",9208205655,true)
// let s2 = new MakeStudents("Hassan","Shirazi",9208305655,true)
// let s3 = new MakeStudents("M","Shirazi",9208344655,false)


// // console.log(s2)

// s1.showProfile()
// s2.showProfile()
// s3.showProfile()



class MakeStudents {
  constructor(){
      // this.fname = fname;   
      // this.lname = lname;
      // this.contact = contact;
      // this.isVarified = isVerified;   
  }
}