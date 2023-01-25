import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import GlobalStyled from '../v1/src/assets/styles/GlobalStyled'
import About from './components/About/Index'
import Banner from './components/Banner/Index'
import ButtonWhatsApp from './components/ButtonWhatsApp/Index'
import Contact from './components/Contact/Index'
import Education from './components/Education/Index'
import Footer from './components/Footer/Index'
import Intro from './components/Intro/Index'
import Navbar from './components/Navbar/Index'
import Projects from './components/Projects/Index'
import Skills from './components/Skills/Index'

function App() {

  return (
    <>
      <ToastContainer />
        
      <GlobalStyled />

      <Navbar  />

      <main>
          <Intro />
          <About />
          <Education />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
      </main>        

        <ButtonWhatsApp />

        <Footer />
    </>
  )
}

export default App
