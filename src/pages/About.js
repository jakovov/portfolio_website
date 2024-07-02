import React from 'react'
import '../styles/About.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
// import profilepic from '../assets/profile2.jpg';
import ProfilePicture from './test';
function About({ colorScheme, colorSchemetext }) {
  return (
    <div id='petar'>

      <header className={`${colorScheme} ${colorSchemetext}`}>
        <div className={`dare ${colorScheme}`}>
          <div className="dareinside">
            <div className="section-heading page-heading">
              {/* <p class="section-description">Get to know me</p> */}
              <h2 className={`section-title ${colorSchemetext}`}>About Me</h2>
              <div className="animated-bar"></div>
            </div>
          </div>
        </div>
        <div className="container" >

          <ProfilePicture />

          <div className="content-block">
            <h2 className="content-subtitle">Who am i?</h2>
            <h6 className="content-title">I'm Atanas Jakovov, a Front-End Developer</h6>
            <div className={`content-description ${colorSchemetext}`}>
              <p>
                Hey there, I'm Atanas Jakovov, a Front-End Developer who's passionate about crafting seamless user experiences on the web. With 4 years of experience in web development, I specialize in building responsive and intuitive interfaces using HTML, CSS, and JavaScript, as well as modern front-end frameworks such as React. When I'm not coding, I love to unwind by gaming and exploring virtual worlds.
                I'm always eager to learn new technologies and stay up-to-date with the latest developments in front-end development. Let's collaborate on your next project and create something amazing!
              </p>
            </div>
            <div className="content-info">
              <div className="row">
                <div className="col-12 col-md-6 single-info"><span>Birthday:</span>
                  <p>19.11.1998</p>
                </div>
                <div className="col-12 col-md-6 single-info"><span>Email:</span>
                  <p><a href="mailto:atanasjakovov@gmail.com">atanasjakovov@gmail.com</a></p>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 single-info"><span>Study:</span>
                  <p>FINKI</p>
                </div>
                <div className="col-12 col-md-6 single-info"><span>From:</span>
                  <p>Kavadarci, Macedonia</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 single-info"><span>Interests:</span>
                  <p>Video games, Music, Programming</p>
                </div>
                <div className="col-12 col-md-6 single-info"><span>Langages:</span>
                  <p>Macedonian, English</p>
                </div>
              </div>
            </div>
            <div className="" id='zakon'>
            <a download="AtanaseJakovov-Cv.pdf" href="/pdf/cv.pdf" className="btn content-download button-main button-scheme" role="button">
  Download CV
</a>

              <ul class="list-unstyled list-inline content-follow">
                <li class="list-inline-item"><a href="https://twitter.com/orenjipluto" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/atanas-jakovov-58199520b/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a></li>
                <li class="list-inline-item"><a href="https://github.com/jakovov" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a></li>
                <li class="list-inline-item"><a href="https://open.spotify.com/user/r4o607mqrh2eoahk8t1i6ymx6" target="_blank" rel="noopener noreferrer"><LibraryMusicIcon /></a></li>
                <li class="list-inline-item"><a href="#0" target="_blank"><TwitterIcon /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>

  )
}

export default About