import React from 'react'
import {FlexItems, NavbarBrand, NavbarList, NavbarListItem, NavbarLogo, StyledNavbar } from './Styled'
import Logotype from '../../img/logotype.svg';
import { Container } from '../../styles/GlobalGrid';


const Navbar = () => {
  return (
    <StyledNavbar>
        <Container>
            <FlexItems>

                <NavbarBrand href='#'>
                   <NavbarLogo src={Logotype} />
                </NavbarBrand>

                <NavbarList>
                    <NavbarListItem>Home</NavbarListItem>
                    <NavbarListItem>Sobre mim</NavbarListItem>
                    <NavbarListItem>Projetos</NavbarListItem>
                    <NavbarListItem>Contato</NavbarListItem>
                </NavbarList>

            </FlexItems>
        </Container>
    </StyledNavbar>
    
  )
}

export default Navbar;