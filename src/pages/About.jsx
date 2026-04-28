import React from 'react'
import about from '../assets/about.svg'
import download from '../assets/download.png'


const About = () => {
    return (
        <section id="about">
            <h2 className='abt-txt'>About Me</h2>
            <div className='about-cont'>

                <img className='avatar2' src={about} alt="About Me" />


                <div>
                    <p className='p-abt'>
                        <p>
                            I am a passionate Full Stack Developer with hands-on experience in both frontend and backend technologies. <br />
                            I build responsive user interfaces using modern tools like React, and develop scalable backend systems using <br /> Node.js and Express with MongoDB.
                            I am capable of handling end-to-end development, from design to deployment. <br />
                            If you have a business idea, I can turn it into a fully functional web application with clean UI and efficient performance.
                        </p>
                    </p>
                    <a href="/public/resume.pdf" download>
                        <button className='about-btn'>Download Resume
                            <img className='download-icon' src={download} alt="Download" height={30} />
                        </button>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default About