import React from 'react'
import '../styles/About.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
// import profilepic from '../assets/profile2.jpg';
import ProfilePicture from './test';
function About({colorScheme, colorSchemetext}) {
  return (
    <div id='petar'>
    
    <header className={`${colorScheme} ${colorSchemetext}`}>
  <div className={`dare ${colorScheme}`}>
              <div class="dareinside">
                <div class="section-heading page-heading">
                  {/* <p class="section-description">Get to know me</p> */}
                  <h2 className={`section-title ${colorSchemetext}`}>About Me</h2>
                  <div class="animated-bar"></div>
                </div>
              </div>
            </div>
  <div class="container" >
    
    <ProfilePicture />
    
    <div class="content-block">
	<h2 class="content-subtitle">Who am i?</h2>
<h6 class="content-title">I'm Atanas Jakovov, a Front-End Developer</h6>
<div className={`content-description ${colorSchemetext}`}>
                      <p>
                      Hey there, I'm Atanas Jakovov, a Front-End Developer who's passionate about crafting seamless user experiences on the web. With 4 years of experience in web development, I specialize in building responsive and intuitive interfaces using HTML, CSS, and JavaScript, as well as modern front-end frameworks such as React and Vue. When I'm not coding, I love to unwind by gaming and exploring virtual worlds.
                      I'm always eager to learn new technologies and stay up-to-date with the latest developments in front-end development. Let's collaborate on your next project and create something amazing!
                      </p>
                    </div>
<div class="content-info">
                      <div class="row">
                        <div class="col-12 col-md-6 single-info"><span>Birthday:</span>
                          <p>19.11.1998</p>
                        </div>
                        <div class="col-12 col-md-6 single-info"><span>Email:</span>
                          <p><a href="mailto:emma@example.com">atanasjakovov@gmail.com</a></p>
                        </div>
                      </div>
                      
                      <div class="row">
                        <div class="col-12 col-md-6 single-info"><span>Study:</span>
                          <p>FINKI</p>
                        </div>
                        <div class="col-12 col-md-6 single-info"><span>From:</span>
                          <p>Kavadarci, Macedonia</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 col-md-6 single-info"><span>Interests:</span>
                          <p>Video games, Music, Programming</p>
                        </div>
                        <div class="col-12 col-md-6 single-info"><span>Langages:</span>
                          <p>Macedonian, English</p>
                        </div>
                      </div>
                    </div>
<div class="" id='zakon'><a download="" href="assets/pdf/AtanaseJakovov-Cv.pdf" class="btn content-download button-main button-scheme" role="button">Download CV</a>
                      <ul class="list-unstyled list-inline content-follow">
                        <li class="list-inline-item"><a href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a></li>
                        <li class="list-inline-item"><a href="https://www.linkedin.com/in/atanas-jakovov-58199520b/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a></li>
                        <li class="list-inline-item"><a href="https://github.com/jakovov" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a></li>
                        <li class="list-inline-item"><a href="https://open.spotify.com/user/r4o607mqrh2eoahk8t1i6ymx6" target="_blank" rel="noopener noreferrer"><LibraryMusicIcon/></a></li>
                        <li class="list-inline-item"><a href="#0" target="_blank"><TwitterIcon/></a></li>
                      </ul>
                    </div>
</div>
    {/* <div class="about-me-container">
    <h2>Who am i?</h2>
      <h1>I'm Atanas Jakovov.</h1>
      <h2>Front-end Developer</h2>
      <p>Hi, I'm Atanas! I'm a front-end developer based in Skopje, Macedonia. I love creating beautiful and functional websites using HTML, CSS, and JavaScript. When I'm not coding, I'm gaming bitch.</p>
      <div class="details">
        <div class="detail-item">
          <span>First Name:</span>Atanas<br/>
        </div>
        <div class="detail-item">
          <span>Last Name:</span>Jakovov<br/>
        </div>
        <div class="detail-item">
          <span>Email:</span> atanasjakovov@gmail.com<br/>
        </div>
        <div class="detail-item">
          <span>GitHub:</span> @jakovov<br/>
        </div>
        <div class="detail-item">
          <span>Location:</span> Kavadarci, Macedonia<br/>
        </div>
        <div class="detail-item">
          <span>Age:</span> 24<br/>
        </div>
      </div>
      <a href="#" class="download-cv-button">Download CV</a>
    </div> */}
  </div>
</header>





  {/* <main>
    <div class="container">
      <div class="education-section">
        <h2>Education</h2>
        <div class="cards">
          <div class="card">
            <h3>Faculty of Computer Science & Engineering</h3>
            <p>Ss. Cyril and Methodius University in Skopje (UKIM)</p>
            <p>Graduated in 2030</p>
          </div>
          <div class="card">
            <h3>Brainster</h3>
            <p>Brainster Academy</p>
            <p>Completed in 2020</p>
            <p>Duration: 9 months</p>
            <p>Projects: 3 projects</p>
            <ul class="topics">
              <li><i class="fas fa-code"></i> HTML/CSS</li>
              <li><i class="fas fa-code"></i> JavaScript</li>
              <li><i class="fas fa-code"></i> jQuery</li>
              <li><i class="fas fa-code"></i> React</li>
            </ul>
          </div>
        </div>
      </div>

      <section class="skills">
        <h3>My Skills</h3>
        <ul>
          <li class="animated fadeInUp">HTML</li>
          <li class="animated fadeInUp">CSS</li>
          <li class="animated fadeInUp">JavaScript</li>
          <li class="animated fadeInUp">React</li>
          <li class="animated fadeInUp">Bootstrap</li>
        </ul>
      </section>
    </div>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2023 John Doe. All rights reserved.</p>
    </div>
  </footer> */}
</div>

  )
}

export default About