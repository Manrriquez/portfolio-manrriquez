import React from 'react'
import { ToastContainer } from 'react-toastify';
import About from '../../components/About/Index';
import Banner from '../../components/Banner/Index';
import ButtonWhatsApp from '../../components/ButtonWhatsApp/Index';
import Contact from '../../components/Contact/Index';
import Education from '../../components/Education/Index';
import Footer from '../../components/Footer/Index';
import Intro from '../../components/Intro/Index';
import Navbar from '../../components/Navbar/Index';
import Projectx from '../../components/Projects/Index';
import Skills from '../../components/Skills/Index';
import GlobalStyled from '../../styles/GlobalStyled';
import 'react-toastify/dist/ReactToastify.css';




const Home = () => {
  return (
    <>
        <ToastContainer />
      <GlobalStyled />
        <Navbar  />
        <ButtonWhatsApp />
        <main>
          <Intro />
          <About />
          <Education />
          <Banner />
          <Skills />
          <Projectx />
          <Contact />
        </main>        
        <Footer />
    </>
  )
}

export default Home;