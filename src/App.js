import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import Sonic from './components/Sonic';
import Bread from './components/Bread';
import Junior from './components/Junior';
import Roz from './components/Roz';
import Pikachu from './components/Pikachu';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter basename="/website-final">
        <Routes>
          <Route exact path="/" element={ <Homepage /> } />
          <Route exact path="/Sonic" element={ <Sonic/>}/>
          <Route exact path="/Junior" element={ <Junior/>}/>
          <Route exact path="/Roz" element={ <Roz/>}/>
          <Route exact path="/Pikachu" element={ <Pikachu
        />}/>
          <Route exact path="/Bread" element={ <Bread/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
