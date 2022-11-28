import React from 'react'
import {FlexItems, NavbarBrand, NavbarLinkItem, NavbarList, NavbarListItem, NavbarLogo, StyledNavbar } from './Styled'
import Logotype from '../../assets/img/logotype.svg';
import { Container } from '../../assets/styles/GlobalGrid';
import { ButtonPrimary } from '../../assets/styles/GlobalComponents';


const Navbar = () => {
  return (
    <StyledNavbar>
        <Container>
            <FlexItems>

                <NavbarBrand href='#'>
                   <NavbarLogo src={Logotype} />
                </NavbarBrand>

                <NavbarList>
                  
                    <NavbarListItem>
                      <NavbarLinkItem href="#about">Sobre mim</NavbarLinkItem>
                    </NavbarListItem>

                    <NavbarListItem>
                      <NavbarLinkItem href="#timeline">Timeline</NavbarLinkItem>
                    </NavbarListItem>

                    <NavbarListItem>
                      <NavbarLinkItem href="#projects">Projetos</NavbarLinkItem>
                    </NavbarListItem>

                    <NavbarListItem>
                      <NavbarLinkItem href="#skills">Skills</NavbarLinkItem>
                    </NavbarListItem>

                    <ButtonPrimary href="#contact" left="25px" size="250px">Contato</ButtonPrimary>

                </NavbarList>

            </FlexItems>
        </Container>
    </StyledNavbar>
    
  )
}

export default Navbar;