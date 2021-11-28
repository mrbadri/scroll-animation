import logo from './logo.svg';
import './App.scss';
import { JWTProvider } from './contexts';
import { useEffect } from 'react';
import { useAuth } from './hook';

function App() {
  const { logout } = useAuth();

  useEffect(() => {
    console.log("test useeffect");
    console.log(logout);
  }, [])

  return (
    // <JWTProvider>
      <div className="App flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto">
        <h1>Hello World!</h1>
      </div>
    // </JWTProvider>
  );
}

export default App;
