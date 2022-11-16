import React from 'react'
import About from '../../components/About/Index';
import Education from '../../components/Education/Index';
import Intro from '../../components/Intro/Index';
import Navbar from '../../components/Navbar/Index';
import Projectx from '../../components/Projects/Index';
import Skills from '../../components/Skills/Index';
import GlobalStyled from '../../styles/GlobalStyled';




const Home = () => {
  return (
    <>
      <GlobalStyled />
        <Navbar  />
        <main>
          <Intro />
          <About />
          <Skills />
          <Education />
          <Projectx />
        </main>
    </>
  )
}

export default Home;