import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Hero from './Hero.js';
import Manicule from '../src/Manicule.svg';
function App() {
  return (
    <div>
 <Menu/>
 <Hero/>
 <div class="animated pulse">
   <img class="manicule" src={Manicule}/>
</div>
 </div>
  );
}

export default App;
