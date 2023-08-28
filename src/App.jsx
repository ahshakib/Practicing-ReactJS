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
  const Person = ({ name, age, email }) => {
    return (
      <>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Email: {email}</h4>
      </>
    );
  };
  return (
    <>
      <Person name="Shakib" age="23" email="ahshakib75@gmail.com" />

      <h6>Powered by Shakib</h6>
    </>
  );
}

export default App;
