// console.log(window)

// let h1 = document.createElement('h1');
// h1.textContent = "Hello JS"

let body = document.body;


let rh1 = React.createElement('h1' , {className:"box"}, React.createElement("span", null , "I am span inside H1 from React") );

// body.append(rh1)

// console.log("Real Dom ->",h1)
console.log("Virtual Dom ->", rh1 )

// console.log(React) 

let root = document.querySelector('#root')

ReactDOM.createRoot(root).render(rh1)