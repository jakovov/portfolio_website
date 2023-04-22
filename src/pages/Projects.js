import React from 'react'
import '../styles/Projects.css';
import projectone from '../assets/project1.jpg'
import projecttwo from '../assets/solarpanelwebsite.jpg'
function Projects({ colorScheme, colorSchemetext}) {
  return (
    <div id='zamalce'>
    <header className={`${colorScheme}`}>
    <div className={`dare ${colorScheme}`}>
              <div className="dareinside">
                <div className="section-heading page-heading">
                  {/* <p class="section-description">Get to know me</p> */}
                  <h2 className={`section-title ${colorSchemetext}`}>My projects</h2>
                  <div className="animated-bar"></div>
                </div>
              </div>
            </div>
            <div className="container py-5">
            <div className="card-container">
  <div className="card">
    <img src={projectone} alt="My profile"></img>
    <h2>Brainster Website</h2>
    <p>Website prototype for Brainster</p>
    <div className="card-buttons">
      <a href="https://inquisitive-kulfi-102cec.netlify.app/" target="_blank"  rel="noopener noreferrer" className="demo-button">Demo</a>
      <a href="https://github.com/jakovov/brainsterproject-1" target="_blank"  rel="noopener noreferrer" className="code-button">Code</a>
    </div>
  </div>
  <div className="card">
    <img src={projecttwo} alt="My profile"></img>
    <h2>Stafilov-Solar Website</h2>
    <p>Website Stafilov-Solar Company</p>
    <div className="card-buttons">
      <a href="https://astonishing-mooncake-1251cc.netlify.app/" target="_blank"  rel="noopener noreferrer" className="demo-button">Demo</a>
      <a href="https://github.com/jakovov/stafilovsolar-website" target="_blank" rel="noopener noreferrer" className="code-button">Code</a>
    </div>
  </div>
  

  
</div>

</div>
</header>

    </div>
  )
}

export default Projects