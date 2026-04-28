import React from 'react'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'
const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-container'>
        <div className='c-title'>
          <h3 className='c-title'>Contact Me </h3>
          <p className='para-tag'>Get in touch with me for any inquiries or opportunities!</p>
        </div>
        <div className='reach-me'>
          <div className='property'>
            <a className='decor' href="mailto:harizcpr@gmail.com">
              <button className='icon'><img  src={email} alt="Email" width={20} /> Email</button>
              
            </a>
          </div>
          <div className='property'>
            <a className='decor' href="https://www.linkedin.com/in/hariprasathsathasivam/" target="_blank" rel="noopener noreferrer">
              <button className='icon'><img src={linkedin} alt="LinkedIn" width={20} /> LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact