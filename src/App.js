import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Sonic from './images/sonic.svg';
import Bread from './images/bread.svg';
import Junior from './images/junior.svg';
import Roz from './images/roz.svg';
import Pikachu from './images/pikachu.svg';
import Header from './images/header.svg';
import Sider from './images/sider.svg';
import Footer from './images/footer.svg';


function App() {
  return (
    <div className="App">
      <div ClassName= "header">
      <img src = { Header }/>
      </div>
      <div ClassName= "sider">
      <img src = { Sider }/>
      </div>
      <div className= "ClassName">
        <div ClassName="paint">
          Daniel Emerson's <br/>
          MS Paint Art Gallery:
        </div>
      <img src = { Pikachu }/>
      <img src = { Junior }/>
      <img src = { Roz }/>
      <img src = { Bread }/>
      <img src = { Sonic }/>
      </div>
      <div className= "footer">
      <img src = { Footer }/>
      </div>
    </div>
  );
}

export default App;
