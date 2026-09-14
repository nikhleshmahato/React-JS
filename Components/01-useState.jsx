import { useState } from "react";

// 1
function App(){
  const [fruit,setName] = useState("apple");
  
  return (
    <div>
      <h1>{fruit}</h1>
    </div>
  )
}

// 2
function App(){
  const [fruit,setName] = useState("apple"); // old value in useState
  const changeFruit = () => setName("banana"); // new value in setName

  return (
    <div>
      <h1>{fruit}</h1> 
      <button onClick={changeFruit}>change</button>
    </div>
  )
}

export default App;
