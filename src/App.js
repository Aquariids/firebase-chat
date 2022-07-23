import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar,AppRouter } from './Components';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
    
  );
}

export default App;
