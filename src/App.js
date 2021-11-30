import logo from './logo.svg';
import './App.scss';
import { JWTProvider } from './contexts';
import { useEffect } from 'react';
import { useAuth } from './hook';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';

function App() {
  const { logout } = useAuth();

  useEffect(() => {
    console.log("test useeffect");
    console.log(logout);
  }, [])

  return (
    // <JWTProvider>
      <div className="App bg-gray-400 h-screen overflow-x-hidden overflow-y-auto ">
        <div className="relative mt-44 bg-green-500 ">
          <Nav1></Nav1>
          {/* <Nav2></Nav2> */}
          {/* <section className="bg-blue-800 h-40 w-full">section 1 </section>
          <section className="bg-red-800 h-40 w-full">section 2</section>
          <section className="bg-pink-800 h-40 w-full">section 3</section> */}
          <div className="h-screen"></div>
        </div>

        <hr/>
      
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    // </JWTProvider>
  );
}

export default App;
