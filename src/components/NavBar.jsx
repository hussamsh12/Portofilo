import React from 'react';
import '../styling/nav-styling.css';
import '../styling/fonts.css'


function NavigationBar() {
  return (
    <div className="nav-bar-container">
      <div id='inner-links-container'>
        
        <a href="#Home">Home</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact</a>
      </div>
      <div id="empty-box"></div>
      
    </div>
  );
}

export default NavigationBar;