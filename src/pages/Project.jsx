import React from 'react'



const Project = () => {
  return (
    <section  id='projects'>
      <h2 className='p-title'>My Projects</h2>
      <div className='project-cont'>

        <div className='card-container'>
          <img src="/public/ecommerce.svg" alt="R-Mart Project" width={300}  height={300} />
          <div className='card-content'>
            <h3>R-Mart</h3>
            <p className='para-tag' >R-Mart is a Ecommerce website . it was build with react.js.the project features a modern UI, responsive design, and seamless user experience.</p>
            <a href="https://my-mart-gilt.vercel.app/" target="_blank">
              <button className='p-btn'>View Live</button>
            </a>
          </div>
        </div>
        <div className='card-container'>
          <img src="/public/food.png" alt="Ssc Food Order Project" width={300} height={300} />
          <div className='card-content'>
            <h3>Ssc food order</h3>
            <p className='para-tag'>Ssc food order is a food ordering website built with React and express.js. <br /> It allows users to browse menus, add items to their cart, and place orders seamlessly.</p>
            <a href="https://ssc-project-frontend.vercel.app/" target="_blank">
              <button className='p-btn'>View Live</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project