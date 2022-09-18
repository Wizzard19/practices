import React from 'react';
import '../Styles/HomePage.css'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function HomePage() {

  return (
    <>
    <div className='home-container'>
      <div className='header'>
      <NavBar />
      </div>

      <div className='home-footer'>
        <Footer />
      </div>

    </div>


    </>
  )
}

export default HomePage;