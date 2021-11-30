import logo from './logo.svg';
import './App.scss';
import { JWTProvider } from './contexts';
import { useEffect, useState } from 'react';
import { useAuth } from './hook';

function App() {
  const { logout } = useAuth();
  const [drakMode, setdrakMode] = useState(true)

  useEffect(() => {
    console.log("test useeffect");
    console.log(logout);
  }, [])

  return (
    // <JWTProvider>
     <div className={drakMode && "dark"}>
        <div className="App dark:bg-black dark:text-white flex justify-center items-center flex-col h-screen overflow-x-hidden overflow-y-auto">
          <h1 className="mb-10" >Hello World!</h1>
          <button className="bg-green-600 py-4 px-6 rounded dark:bg-green-400" onClick={()=>{setdrakMode(!drakMode)} }>change theme</button>
        </div>
     </div>
    // </JWTProvider>
  );
}

export default App;
