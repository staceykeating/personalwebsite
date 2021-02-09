import React from 'react';
import hamburger from '../src/hamburger.svg';
import './App.css';

function Menu() {
  return (
    <div className="menu-section">
        <h3 class="menu">
    Menu
        </h3>
        <img src={hamburger}></img>
  
    </div>
  );
}

export default Menu; 
