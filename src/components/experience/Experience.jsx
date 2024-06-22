import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Nodejs</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>ReactJS</h4>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Data analytics</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Numpy</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Pandas</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Matplotlib</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>sklearn</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Excel</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>PowerBI</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tablue</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;