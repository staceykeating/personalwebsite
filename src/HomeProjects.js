import React from 'react';
import './App.scss';
import BubbleMockup1 from '../src/BubbleMockup-1.png';
import BubbleMockup2 from '../src/BubbleMockup-2.png';
import BubbleMockup3 from '../src/BubbleMockup-3.png';


function HomeProjects() {
  return (
    <div class="home-projects">
      <div class="image-box">
      <img class="home-mockup-side" src={BubbleMockup2}/>
<img class="home-mockup-main" src={BubbleMockup1}/>
<img class="home-mockup-side" src={BubbleMockup3}/>
</div>
<h1>bubble</h1>
<p>Bubble is a social media platform that operates analogously to Instagram & Twitter. It focuses heavily on improving the user experience through providing an ad-free environment, collecting minimal user-data, and transparently communicating terms & conditions.</p>
    </div>
  );
}

export default HomeProjects;