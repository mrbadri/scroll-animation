import { DisplayA, DisplayB, DisplayC } from "./components";
import Add from "./components/Add";
import Minus from "./components/Minus";
import { useCounterState } from "./context";

function App() {
  const useCounter = useCounterState();
  console.log(useCounter);

  return (
    <div className="bg-orange-300 px-5 py-4">
      {/* <DisplayA counter={counter} />
      <Add />
      <DisplayB counter={counter} />
      <Minus />
      <DisplayC counter={counter} /> */}
    </div>
  );
}

export default App;
