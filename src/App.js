import Icon from "./asset/icons";
import Menu from "./components";
import ActivitySign from "./components/activitySign";
import Navimation from "./core";
import dataTest from "./data";

function App() {
  return (
    <div className="App flex flex-col items-center w-screen h-screen overflow-auto text-blue-50 stroke-white order-white pt-24">
      <div className="w-11/12">
        <Navimation items={dataTest} type={"magnifier"} className="mb-32" />
      </div>
      <div className="w-11/12">
        <Navimation items={dataTest} type={"wave"} className="mb-32" />
      </div>
      <div className="w-11/12">
        <Navimation items={dataTest} type={"fault"} className="mb-32" />
      </div>
      <div className="w-11/12">
        <Navimation items={dataTest} type={"hill"} className="mb-32" />
      </div>
      <div className="w-11/12">
        <Navimation items={dataTest} type={"hovering"} className="mb-32" />
      </div>
    </div>
  );
}

export default App;
