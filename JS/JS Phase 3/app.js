
function parent(){
  var user = "anum";

  function child() {
    var age = 20;
    console.log(user);
    console.log(age)
  }
  
  function grandChild(){
    console.log(user);
    console.log(age)

  }
  return child

}

console.log(parent()())