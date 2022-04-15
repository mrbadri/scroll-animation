import './App.scss';
import Slider from './components/Slider';
import Home from './views/pages/home';

function App() {
  return (
    <div className="App scroll-smooth flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto bg-blue-50">
      <Home/>
      {/* <Slider/> */}
    </div>
  );
}

export default App;
