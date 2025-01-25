import React from 'react';
import IMG1 from '../../assets/insta-app.png';

import IMG4 from '../../assets/netflix-app.png';
import IMG2 from '../../assets/notebook.png';

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
      link: 'https://github.com/Chocomimin/projectnest2.o-insta-fake-account-detector.git',
      github: 'https://github.com/Chocomimin/projectnest2.o-insta-fake-account-detector.git',
    },
    {
      id: 2,
      title: 'Netflix stock prices prediction',
      img: IMG4,
      description:
        'Predict Netflix stock prices with precision using advanced algorithms in our AI-driven forecasting tool',
      technologies: 'machine learning | full stack',
      link: 'https://predictor12.netlify.app/',
      github: 'https://github.com/Chocomimin/netflix-stock-predictor.git',
    },
    {
      id: 3,
      title: 'note taking application',
      img: IMG2,
      description:
        'A note-taking application allows users to create, edit, organize, and store notes efficiently for personal or professional use',
      technologies: 'Mern | full stack',
      link: 'https://github.com/Chocomimin/note-taking-application.git',
      github: 'https://github.com/Chocomimin/note-taking-application.git',
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
