import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count - 10);
  };

  return (
    <h1 style={{ backgroundColor: "blue", borderRadius: "4px" }}>
      Hello world
    </h1>
  );
}

export default App;
