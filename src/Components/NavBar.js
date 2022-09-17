import React from 'react';
import '../Styles/navBar.css';
import  Logo  from '../Assets/images/logospitalan.png';
import NavBarItems from './NavBarItems';

function NavBar() {
  return (

    <>
    <div className='navBar-container'>
      
        <a className='logo' href='/home'>
          <img src={Logo} alt='logo?' /> </a>  
        <NavBarItems item='HOME'/>
        <NavBarItems item='CONTACT'/>

      
    </div>
    </>
  )
}

export default NavBar