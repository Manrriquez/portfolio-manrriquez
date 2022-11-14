import React from 'react'
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
        </main>
    </>
  )
}

export default Home;