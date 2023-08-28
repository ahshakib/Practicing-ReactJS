import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={() => setCount(count + 1)}>+Increment</button>
      <button onClick={() => setCount(count - 1)}>-Decrement</button>
      <div>{count}</div>
    </>
  );
}

export default App;
