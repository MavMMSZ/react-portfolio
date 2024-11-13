import React from 'react';
import '../styles/about.css';

export default function AboutMe() {
  return (
    <div class='about'>
      <h1><strong>About Me</strong></h1>
      <div class='about-content'> 
      <img class='mav' src='/assets/mavy.jpg' alt='Maverick Snider' />
      <p class='me'>
        Hello! My name is Maverick Snider and I am a learning web developer. I am currently enrolled in the university of Ohio's coding bootcamp. I am learning how to code in HTML, CSS, and JavaScript. I am also learning how to use React and Node.js. I am excited to learn more about coding and to start my career as a web developer.
      </p>
      </div>
    </div>
  );
}