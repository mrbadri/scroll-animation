import { useState } from "react";
import "./App.css";
import { DisplayA, DisplayB, DisplayC } from "./components";
import Add from "./components/Add";
import Minus from "./components/Minus";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-orange-300 px-5 py-4">
      <DisplayA counter={counter} />
      <Add
        onClick={() => {
          setCounter(counter + 1);
        }}
      />
      <DisplayB counter={counter} />
      <Minus
        onClick={() => {
          setCounter(counter - 1);
        }}
      />
      <DisplayC counter={counter} />
    </div>
  );
}

export default App;
