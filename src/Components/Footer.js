import React from 'react';
import '../Styles/Footer.css';
import { AiOutlineGithub,
         AiOutlineLinkedin,
         AiOutlineInstagram

} from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='social-media'>
      <a href='https://www.linkedin.com/in/alejandro-spitale/' target='_blank'>{<AiOutlineLinkedin />}</a>
        <a href='https://github.com/Wizzard19' target='_blank'>{<AiOutlineGithub />}</a>
        <a href='https://www.instagram.com/alejandrospitale/' target='_blank'>{<AiOutlineInstagram />}</a>
        
      </div>
     
    </div>
  )
}

export default Footer