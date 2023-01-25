import styled from "styled-components";


const FlexItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledNavbar = styled.nav`
    
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 999;
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
    align-items:    center;
    margin-bottom: 0;
    list-style: none;

    
`;

const NavbarListItem = styled.li`
    list-style: none;
    margin-left: 0.7rem;
    margin-right: 0.7rem;

    @media (max-width: 992px) {
        display: none;
    }
`;

const NavbarLinkItem = styled.a`
    text-decoration: none;
    transition: 0.3s;
    font-weight: 500;
    font-size: clamp(18px, 3vw, 22px);
    color: #393536;

    &:hover {
        color: #FCA61F;
    }
`;

export {StyledNavbar, NavbarBrand,NavbarLogo, NavbarList, NavbarListItem, FlexItems, NavbarLinkItem};