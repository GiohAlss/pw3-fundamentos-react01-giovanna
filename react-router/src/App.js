import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contato from './components/Contato';
import Empresa from './components/Empresa';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>

            <Route index element={<Home/>}/>
            <Route path='empresa' element={<Empresa/>}/>
            <Route path='contato' element={<Contato/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;