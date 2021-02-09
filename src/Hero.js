import React from 'react';
import './App.css';
import HeroImg from '../src/ProfileImage.png';

function Hero() {
  return (
    <div class="hero">
      <div class="hero-text">
   <h1>Hi, I'm Stacey.</h1>
   <p>I'm a UX Designer based in Vancouver.</p>
   </div>
   <div class="hero-image">
     <img src={HeroImg}></img>
   </div>
   </div>
  );
}

export default Hero;