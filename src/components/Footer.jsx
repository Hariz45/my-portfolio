import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <section >
      <div className='f-container'>
        <h2 className='f-name'>Hariprasath</h2>
        <p className='f-ptag'> MERN Stack Developer </p>
        <div className='socialmedia'>
            <a href="https://www.linkedin.com/in/hariprasathsathasivam/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" width={20} />
            </a>
            <a href="https://github.com/Hariz45" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" width={20} />
            </a>
             <a href="https://www.instagram.com/s_lakshmihariz?igsh=MTFjZmljMDZxdnYz" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" width={20} />
            </a>
        </div>
      </div>
      
    </section>
  )
}

export default Footer