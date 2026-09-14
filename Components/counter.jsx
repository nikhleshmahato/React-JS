import { useState } from "react";


function App(){
  const [value, change] = useState(0); // old value in useState
  const i = () => change(value + 1); // new value in change

  const d = () => change(value - 1); // new value in change

  return (
    <div>
      <h1>{value}</h1> 
      <button onClick={i}>increment</button>
      <button onClick={d}>decrement</button>
    </div>
  )
}

export default App;

// better

function App() {
  const [value, setValue] = useState(0);

  // Functional updates guarantee stale state is never used
  const increment = () => setValue((prevValue) => prevValue + 1);
  const decrement = () => setValue((prevValue) => prevValue - 1);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
