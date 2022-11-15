import React from 'react'
import About from '../../components/About/Index';
import Intro from '../../components/Intro/Index';
import Navbar from '../../components/Navbar/Index';
import GlobalStyled from '../../styles/GlobalStyled';




const Home = () => {
  return (
    <>
      <GlobalStyled />
        <Navbar  />
        <main>
          <Intro />
          <About />
        </main>
    </>
  )
}

export default Home;