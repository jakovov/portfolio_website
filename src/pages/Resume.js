import React from 'react'
import '../styles/Resume.css'

function Resume() {
    return (
        <div id='zamalce'>
            <header>
                <div class="dare">
                    <div class="dareinside">
                        <div class="section-heading page-heading">
                            {/* <p class="section-description">Get to know me</p> */}
                            <h2 class="section-title">Resume</h2>
                            <div class="animated-bar" id='resume-bar'></div>
                        </div>
                        </div>
                        <h2>Education</h2>
                        <div class="resume-container">
                        
                            <div class="resume-left">
                                <p className='study-time-spent'>2017-Present</p>
                                <h3>Software Engineer in Computer Science</h3>
                                <p className='study-university'>FINKI</p>
                                <p className='study-description'>Faculty of Computer Science & Engineering , specifically Application of e-technologies - Ss. Cyril & Methodius University</p>
                            </div>
                            <div class="resume-right">
                                <p className='study-time-spent'>2019-2020</p>
                                <h3>Front-End Developer</h3>
                                <p className='study-university'>Brainster Academy</p>
                                <p className='study-description'>Front-end developer course at that provides hands-on training in the latest web development technologies and techniques. With practical experience in real-world projects</p>
                                {/* <ul>
                                    <li>HTML/CSS</li>
                                    <li>Bootstrap</li>
                                    <li>Javascript</li>
                                    <li>Jquery</li>
                                    <li>AJAX</li>
                                    <li>UX/UI</li>
                                    <li>React</li>
                                </ul> */}
                            </div>
                        </div>

                   
                </div>
            </header>

        </div>
    )
}

export default Resume