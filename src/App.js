import React from 'react';
import './App.scss';
import Menu from './Menu.js';
import Hero from './Hero.js';
import Manicule from '../src/Manicule.svg';
import HomeProjects from './HomeProjects.js';

function App() {
  return (
    <div>
 <Menu/>
 <Hero/>
 <div class="animated pulse">
   <img class="manicule" src={Manicule}/>
</div>
<HomeProjects/>
 </div>

  );
}

export default App;
