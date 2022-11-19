import React from 'react'
import {FlexItems, NavbarBrand, NavbarLinkItem, NavbarList, NavbarListItem, NavbarLogo, StyledNavbar } from './Styled'
import Logotype from '../../img/logotype.svg';
import { Container } from '../../styles/GlobalGrid';
import { ButtonPrimary } from '../../styles/GlobalComponents';


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
                      <NavbarLinkItem href="#">Timeline</NavbarLinkItem>
                    </NavbarListItem>

                    <NavbarListItem>
                      <NavbarLinkItem href="#">Projetos</NavbarLinkItem>
                    </NavbarListItem>

                    <NavbarListItem>
                      <NavbarLinkItem href="#">Skills</NavbarLinkItem>
                    </NavbarListItem>

                    <ButtonPrimary left="25px" size="250px">Contato</ButtonPrimary>

                </NavbarList>

            </FlexItems>
        </Container>
    </StyledNavbar>
    
  )
}

export default Navbar;