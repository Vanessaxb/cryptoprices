import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/currencies' element={ <Currencies /> } />
          <Route path="/price/:symbol" element={<Price/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
