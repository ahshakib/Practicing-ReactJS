import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const styling = {
    color: "red",
  };
  const fontsize = {
    "font-size": "25px",
  };
  const divcolor = {
    color: "orange",
    "font-size": "25px",
    "font-weight": "bold"
  };
  return (
    <>
      <h1 style={styling}>Counter App</h1>
      <button style={fontsize} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button
        style={fontsize}
        onClick={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
      >
        -
      </button>
      <div style={divcolor}>{count}</div>
    </>
  );
}

export function Extra() {
  return <h6>Powered by Shakib</h6>;
}

export default App;
