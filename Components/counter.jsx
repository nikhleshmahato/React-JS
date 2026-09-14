import { useState } from "react";


function App(){
  const [value, change] = useState(0); // old value in useState
  const i = () => change(value + 1); // new value in setName

  const d = () => change(value - 1); // new value in setName

  return (
    <div>
      <h1>{value}</h1> 
      <button onClick={i}>increment</button>
      <button onClick={d}>decrement</button>
    </div>
  )
}

export default App;
