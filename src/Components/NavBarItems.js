import React from 'react';
import '../Styles/navBar.css';

const NavBarItems = (props) => {
  return (
      
     <a href={props.url}><button className='btn-navBar'><li>{props.item}</li></button></a>
  
  ) 
}

export default NavBarItems;