import React from 'react';
import IMG1 from '../../assets/alc.png';

import IMG4 from '../../assets/fake.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Insta fake account detector',
      img: IMG1,
      description:
        'Identify fraudulent Instagram profiles instantly with our InstaFakeAccount Detector.',
      technologies: 'machine learning | full stack',
      link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/Meri-MG/school',
    },
    {
      id: 2,
      title: 'Netflix stock prices prediction',
      img: IMG4,
      description:
        'Predict Netflix stock prices with precision using advanced algorithms in our AI-driven forecasting tool',
      technologies: 'machine learning | full stack',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
