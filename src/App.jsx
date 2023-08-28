import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const fontsize = {
    "font-size": "25px",
  };

  return (
    <>
      <h1 style={{ color: "ActiveBorder" }}>Counter App</h1>
      <button
        style={fontsize}
        className="btn"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        style={fontsize}
        className="btn"
        onClick={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
      >
        -
      </button>
      <div className="divcolor">{count}</div>
    </>
  );
}

export function Extra() {
  return <h6>Powered by Shakib</h6>;
}

export default App;
