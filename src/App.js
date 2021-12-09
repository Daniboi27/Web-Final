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
      
      <BrowserRouter basename="/web-kids-zone">
        <Routes>
          <Route exact path="/" element={ <Homepage /> } />
          <Route exact path="/places" element={ <Sonic/>}/>
          <Route exact path="/shapes" element={ <Junior/>}/>
          <Route exact path="/count" element={ <Roz/>}/>
          <Route exact path="/abc" element={ <Pikachu
        />}/>
          <Route exact path="/animals" element={ <Bread/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
