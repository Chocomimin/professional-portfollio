import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/WhatsApp Image 2024-05-15 at 15.29.25_3acaad93.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Project Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>
          <p>Hello! I'm sai satwika, a skilled Full Stack Developer and Data Analyst passionate about crafting dynamic web applications and uncovering actionable insights from data. With expertise in HTML, CSS, and JavaScript, I've built sleek landing pages and robust APIs. My remote work experience has sharpened my abilities, and I excel in bringing ideas to life, ensuring functionality and aesthetics. With a background in data analytics, I make informed decisions to optimize performance and user engagement. I'm eager to contribute to your projects and bring impactful solutions to life. Let's connect and collaborate!

</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro