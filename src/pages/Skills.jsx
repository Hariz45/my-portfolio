import React from 'react'
import react from '../assets/react.gif'
import express from '../assets/express.png'
import node from '../assets/node.png'
import mongodb from '../assets/mongodb.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.gif'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
const Skills = () => {
  return (
    // <section id="skills">
    //     <h2>My Skills</h2>
    //     <p>My Technical Skills</p>
    //     <div>
    //         <div>
    //             <img src={css} alt="CSS Logo" width={30} />
    //         </div>
    //         <h4>Css </h4>
    //     </div>

    //     <div>
    //         <div>
    //             <img src={bootstrap} alt="Bootstrap Logo" width={30} />
    //         </div>
    //         <h4>Bootstrap </h4>
    //     </div>


    //      <div>
    //         <div>
    //             <img src={tailwind} alt="Tailwind Logo" width={30} />
    //         </div>
    //         <h4>Tailwind </h4>
    //     </div>

    //     <div>
    //         <div>
    //             <img src={javascript} alt="JavaScript Logo" width={30} />
    //         </div>
    //         <h4>JavaScript </h4>
    //     </div>

    //     <div>
    //         <div>⚛️</div>
    //         <h4>React</h4>
    //     </div>

    //     <div>
    //         <div>
    //             <img src={node} alt="Node.js Logo" width={30} />
    //         </div>
    //         <h4>Node.js </h4>
    //     </div>

    //     <div>
    //         <div>
    //             <img src={express} alt="Express Logo" width={30} />
    //         </div>
    //         <h4>Express.js </h4>
    //     </div>

    //     <div>
    //         <div>
    //             <img src={mongodb} alt="MongoDb Logo" width={30} />
    //         </div>
    //         <h4>MongoDb </h4>
    //     </div>
    // </section>
    <section id="skills">
  <h2>My Skills</h2>
  <p>My Technical Skills</p>

  <div className="skills-container">
    <div className="skill-card">
      <img src={css} alt="CSS Logo" />
      <h4>Css</h4>
    </div>

    <div className="skill-card">
      <img src={bootstrap} alt="Bootstrap Logo" />
      <h4>Bootstrap</h4>
    </div>

    <div className="skill-card">
      <img src={tailwind} alt="Tailwind Logo" />
      <h4>Tailwind</h4>
    </div>

    <div className="skill-card">
      <img src={javascript} alt="JavaScript Logo" />
      <h4>JavaScript</h4>
    </div>

    <div className="skill-card">
      <img src={react} alt="React Logo" />
      <h4>React</h4>
    </div>

    <div className="skill-card">
      <img src={node} alt="Node.js Logo" />
      <h4>Node.js</h4>
    </div>

    <div className="skill-card">
      <img src={express} alt="Express Logo" />
      <h4>Express.js</h4>
    </div>

    <div className="skill-card">
      <img src={mongodb} alt="MongoDb Logo" />
      <h4>MongoDb</h4>
    </div>
  </div>
</section>
  )
}

export default Skills