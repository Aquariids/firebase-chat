import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar,AppRouter } from './Components';
import { Context } from '.';
import { useContext } from 'react';
import Loader from './Components/Loader/Loader';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader/>
  } 
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
    
  );
}

export default App;
