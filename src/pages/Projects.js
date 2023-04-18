import React from 'react'
import '../styles/Projects.css';
import projectone from '../assets/project1.jpg'
function Projects({ colorScheme, colorSchemetext}) {
  return (
    <div id='zamalce'>
    <header className={`${colorScheme}`}>
    <div className={`dare ${colorScheme}`}>
              <div class="dareinside">
                <div class="section-heading page-heading">
                  {/* <p class="section-description">Get to know me</p> */}
                  <h2 className={`section-title ${colorSchemetext}`}>My projects</h2>
                  <div class="animated-bar"></div>
                </div>
              </div>
            </div>
            <div class="container py-5">
            <div class="card-container">
  <div class="card">
    <img src={projectone} alt="My profile"></img>
    <h2>Brainster Website</h2>
    <p>Website prototype for Brainster</p>
    <div class="card-buttons">
      <a href="https://inquisitive-kulfi-102cec.netlify.app/" class="demo-button">Demo</a>
      <a href="https://github.com/jakovov/brainsterproject-1" class="code-button">Code</a>
    </div>
  </div>
  <div class="card">
    <img src={projectone} alt="My profile"></img>
    <h2>Brainster Website</h2>
    <p>Website prototype for Brainster</p>
    <div class="card-buttons">
      <a href="https://inquisitive-kulfi-102cec.netlify.app/" class="demo-button">Demo</a>
      <a href="https://github.com/jakovov/brainsterproject-1" class="code-button">Code</a>
    </div>
  </div>
  <div class="card">
    <img src={projectone} alt="My profile"></img>
    <h2>Brainster Website</h2>
    <p>Website prototype for Brainster</p>
    <div class="card-buttons">
      <a href="https://inquisitive-kulfi-102cec.netlify.app/" class="demo-button">Demo</a>
      <a href="https://github.com/jakovov/brainsterproject-1" class="code-button">Code</a>
    </div>
  </div>
  <div class="card">
    <img src={projectone} alt="My profile"></img>
    <h2>Brainster Website</h2>
    <p>Website prototype for Brainster</p>
    <div class="card-buttons">
      <a href="https://inquisitive-kulfi-102cec.netlify.app/" class="demo-button">Demo</a>
      <a href="https://github.com/jakovov/brainsterproject-1" class="code-button">Code</a>
    </div>
  </div>
  <div class="card">
    <img src={projectone} alt="My profile"></img>
    <h2>Brainster Website</h2>
    <p>Website prototype for Brainster</p>
    <div class="card-buttons">
      <a href="https://inquisitive-kulfi-102cec.netlify.app/" class="demo-button">Demo</a>
      <a href="https://github.com/jakovov/brainsterproject-1" class="code-button">Code</a>
    </div>
  </div>
  <div class="card">
    <img src={projectone} alt="My profile"></img>
    <h2>Brainster Website</h2>
    <p>Website prototype for Brainster</p>
    <div class="card-buttons">
      <a href="https://inquisitive-kulfi-102cec.netlify.app/" class="demo-button">Demo</a>
      <a href="https://github.com/jakovov/brainsterproject-1" class="code-button">Code</a>
    </div>
  </div>
</div>

</div>
</header>

    </div>
  )
}

export default Projects