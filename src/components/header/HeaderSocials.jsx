import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './HeaderSocials.css';

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dhupam-saisatwika-b68b52284/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Chocomimin" target="_blank" rel="noreferrer" ><FaGithub /></a>
      
    </div>
  )
}

export default HeaderSocials