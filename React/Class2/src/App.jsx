import { useState } from 'react'
import About from './About'

const App = () => {

  const [count,setCount] = useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>{
        setCount( count + 1)
        console.log(count)
      }}>increment</button>
    </div>
  )
}

export default App
