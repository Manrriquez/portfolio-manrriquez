import styled from "styled-components";


const StyledFooter = styled.footer`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 15rem;
    padding-bottom: 2rem;

`;

const FlexItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 13px;
`;

const LinkSocial = styled.a`
    text-decoration: none;
`;

const IconSocial = styled.img`
    width: 38px;
`;

const TypographyFooter = styled.p `
    text-align: center;
    font-weight: 400;
    font-size: clamp(18px, 3vw, 22px);
    color: #FFFFFF;


`;

export {StyledFooter, FlexItems, LinkSocial, IconSocial, TypographyFooter};