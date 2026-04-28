import React from 'react'
import profile from "../assets/profile.jpeg"
import mail from '../assets/mail.png'   
const Home = () => {
    return (
        <section id='home'>
            <div className='hero-cont'>
                <div className='hero-img'>
                    <div>
                        <img src={profile} alt="Profile Picture" className='avatar' />
                    </div>
                </div>
                <div className='hero-ab'>
                    <h1 >Hi, I am Hari</h1>
                    <h3 className='hero-ab1'>MERN Stack Developer</h3>
                    <p className='hero-ab1'>I am a passionate frontend developer with experience in creating
                        <br />responsive and user friendly web applications.</p>
                    <div className='hero-btn'>
                        <a className='a-text' href="#contact">
                            <button className='cont-btn'>Contact Me
                                <img src={mail} alt="Mail Icon" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Home

