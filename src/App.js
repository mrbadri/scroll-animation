import "./App.css";
import { DisplayA, DisplayB, DisplayC } from "./components";
import Add from "./components/Add";
import Minus from "./components/Minus";

function App() {
  return (
    <div className="bg-orange-300 px-5 py-4">
      <DisplayA />
      <Add />
      <DisplayB />
      <Minus />
      <DisplayC />
    </div>
  );
}

export default App;
