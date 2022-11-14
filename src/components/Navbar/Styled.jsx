import styled from "styled-components";


const FlexItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledNavbar = styled.nav`
    
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: .8rem;
    padding-bottom: .8rem;

`;

const NavbarBrand = styled.a`

    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;

`;

const NavbarLogo = styled.img`
    width: 8rem;
    height: auto;
`;

const NavbarList = styled.ul`

    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

const NavbarListItem = styled.li`
    list-style: none;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
`;


export {StyledNavbar, NavbarBrand,NavbarLogo, NavbarList, NavbarListItem, FlexItems};