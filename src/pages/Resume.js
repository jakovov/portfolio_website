import React from 'react'
import '../styles/Resume.css'
import htmlphoto from '../assets/html-5.png'
import cssicon from '../assets/css-3.png'
import bootstrapicon from '../assets/bootstrap.png'
import tailwindicon from '../assets/tailwind-css.png'
import javascripticon from '../assets/js.png'
import jqueryicon from '../assets/jquery.png'
import ajaxicon from '../assets/ajax.png'
import astroicon from '../assets/astro.png'
import giticon from '../assets/gitlab.png'
import reacticon from '../assets/react-js.png'
import vueicon from '../assets/vue-js.png'


function Resume({ colorScheme, colorSchemetext }) {
	return (
		<div id='zamalce' >
			<header className={`${colorScheme}`}>
				<div className={`dare ${colorScheme}`}>
					<div className="dareinside">
						<div className="section-heading page-heading">
							{/* <p class="section-description">Get to know me</p> */}
							<h2 className={`section-title ${colorSchemetext}`}>Resume</h2>
							<div className="animated-bar" id='resume-bar'></div>
						</div>
					</div>
					<h2 className={`${colorSchemetext}`}>Education</h2>
					<div className="resume-container">

						<div className="resume-left">
							<p className='study-time-spent'>2017-Present</p>
							<h3>Software Engineer in Computer Science</h3>
							<p className='study-university'>FINKI</p>
							<p className='study-description'>Faculty of Computer Science & Engineering , specifically Application of e-technologies - Ss. Cyril & Methodius University</p>
						</div>
						<div className="resume-right">
							<p className='study-time-spent'>2019-2020</p>
							<h3>Front-End Developer</h3>
							<p className='study-university'>Brainster Academy</p>
							<p className='study-description'>Front-end developer course at that provides hands-on training in the latest web development technologies and techniques. With practical experience in real-world projects</p>
						</div>
					</div>

					<div className="private-container">
						<div className='skillstitle'>
							<h1>My Skills</h1>
						</div>
						<div className='skills-inside'>
							<div className='mkd'>
								<div className="skill">

									<div className="skill-name"> <h5>HTML5</h5> <img src={htmlphoto} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '95%' }}><span>95%</span></div>
									</div> */}
								</div>

								<div className="skill">
									<div className="skill-name"><h5>CSS</h5><img src={cssicon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '95%' }}><span>95%</span></div>
									</div> */}
								</div>
								<div className="skill">
									<div className="skill-name"><h5>Bootstrap</h5> <img src={bootstrapicon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '95%' }}><span>95%</span></div>
									</div> */}
								</div>
								<div className="skill">
									<div className="skill-name"><h5>Tailwind CSS</h5><img src={tailwindicon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '50%' }}><span>50%</span></div>
									</div> */}
								</div>
								<div className="skill">
									<div className="skill-name"><h5>Javascript</h5> <img src={javascripticon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '80%' }}><span>80%</span></div>
									</div> */}
								</div>
							</div>
							<div className='mkd2'>
								<div className="skill">
									<div className="skill-name"><h5>Jquery</h5> <img src={jqueryicon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '80%' }}><span>70%</span></div>
									</div> */}
								</div>


								<div className="skill">
									<div className="skill-name"><h5>ASTRO </h5><img src={astroicon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '80%' }}><span>70%</span></div>
									</div> */}
								</div>
								<div className="skill">
									<div className="skill-name"><h5>GIT</h5> <img src={giticon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '99%' }}><span>99%</span></div>
									</div> */}
								</div>
								<div className="skill">
									<div className="skill-name"><h5>React.js</h5> <img src={reacticon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '70%' }}><span>70%</span></div>
									</div> */}
								</div>
								<div className="skill">
									<div className="skill-name"><h5>Vue.js</h5> <img src={vueicon} alt="skill" className='skillphoto'></img></div>
									{/* <div className="progress-bar">
										<div className="progress" style={{ width: '30%' }}><span>30%</span></div>
									</div> */}
								</div>
							</div>
						</div>
					</div>




				</div>
			</header>

		</div>
	)
}

export default Resume