import React from 'react'
import rsw from "../assets/rsw.png"
import cr from "../assets/cr.png"
import mart from "../assets/mart.svg"
import Tvk from "../assets/tvk.png"


const Project = () => {
  return (
    <section  id='projects'>
      <h2 className='p-title'>My Projects</h2>
      <div className='project-cont'>

        <div className='card-container'>
          <img src={Tvk}alt="company website" width={300}  height={300} />
          <div className='card-content'>
            <h3>TVK People's Grievance</h3>
            <p className='para-tag' > Developed a responsive business website for a People complaining their area issues via this website. The website showcases peoples can able to raise their constituency problems share to their MLA.it was developed only in front end using react js. </p>
            <a href="https://tvk-web-topaz.vercel.app/" target="_blank">
              <button className='p-btn'>View Live</button>
            </a>
          </div>
        </div>
        
        <div className='card-container'>
          <img src="/food.png" alt="Ssc Food Order Project" width={300} height={300} />
          <div className='card-content'>
            <h3>Ssc food order</h3>
            <p className='para-tag'>Ssc food order is a food ordering website built with React and express.js. <br /> It allows users to browse menus, add items to their cart, and place orders seamlessly.</p>
            <a href="https://ssc-project-frontend.vercel.app/" target="_blank">
              <button className='p-btn'>View Live</button>
            </a>
          </div>
        </div>

        <div className='card-container'>
          <img src={rsw}alt="company website" width={300}  height={300} />
          <div className='card-content'>
            <h3>Rise Wave Software Solutions</h3>
            <p className='para-tag' >Developed a modern and responsive company portfolio website for RW Software Solutions using React.js. The website showcases company services, technologies, projects, careers, and contact information with a clean UI and mobile-friendly design.</p>
            <a href="https://rs-website-lime.vercel.app/" target="_blank">
              <button className='p-btn'>View Live</button>
            </a>
          </div>
        </div>


        <div className='card-container'>
          <img src={cr}alt="company website" width={300}  height={300} />
          <div className='card-content'>
            <h3>CR Build Service</h3>
            <p className='para-tag' > Developed a responsive business website for a cleaning service company. The website showcases commercial and residential cleaning services, company information, contact details, and service offerings with a modern UI and mobile-friendly design. </p>
            <a href="https://cr-build-service.vercel.app/" target="_blank">
              <button className='p-btn'>View Live</button>
            </a>
          </div>
        </div>


        <div className='card-container'>
          <img src={mart} alt="R-Mart Project" width={300}  height={300} />
          <div className='card-content'>
            <h3>R-Mart</h3>
            <p className='para-tag' >R-Mart is a Ecommerce website . it was build with react.js.the project features a modern UI, responsive design, and seamless user experience.</p>
            <a href="https://my-mart-gilt.vercel.app/" target="_blank">
              <button className='p-btn'>View Live</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project