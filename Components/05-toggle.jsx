// conditional rendering

import { useState } from "react";

function App(){
  const [value,change] = useState(true);

  return (
    <div>      
      <button onClick={() => change(!value)}>toggle</button>
      {
        value?<h1>True Value</h1>: <h1>False Value</h1>
      }
    </div>
  )
}

export default App;
