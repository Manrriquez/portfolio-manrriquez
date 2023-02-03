import styled, { keyframes } from "styled-components";



const AnimatedWaves = keyframes`
    0% {
      background-position-x: 1000px;
    }
    100% {
      background-positon-x: 0px;
    }
`;
const Animated = keyframes`
    0% {
      background-position-x: -1000px;
    }
    100% {
      background-positon-x: 0px;
    }
`;

const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    background: #FCA61F;
    min-height: 100px;
    padding: 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
        color: #fff;
        margin: 15px 0 10px 0;
        font-size: 1rem;
        font-weight: 300;
        @media (max-width: 792px) {
           text-align: center;
        }
    }

`;

const Waves = styled.div`
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background-image:  url(${props => props.url});
    background-size: 1000px 100px;

    #wave1 {
        z-index: 1000;
        opacity: 1;
        bottom: 0;
        animation: ${AnimatedWaves} 4s linear infinite;
    }
      
    #wave2 {
        z-index: 999;
        opacity: 0.5;
        bottom: 10px;
        animation: ${Animated} 4s linear infinite !important;
    }
      
    #wave3 {
        z-index: 1000;
        opacity: 0.2;
        bottom: 15px;
        animation:  ${AnimatedWaves} 3s linear infinite;
    }
      
    #wave4 {
        z-index: 999;
        opacity: 0.7;
        bottom: 20px;
        animation: ${Animated} 3s linear infinite;
    }
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

const ListISocialFooter = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
`;

const ListItemSocialFooter = styled.li`
    list-style: none;
`;
const ListLinkSocialFooter = styled.a`
    font-size: 2rem;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;

    hover: {
        transform: translateY(-10px);
    }
`;

const ListLinkMenuFooter = styled.a`
    font-size: 1.2rem;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
    text-decoration: none;
    opacity: 0.75;
    font-weight: 300;
`;

export {StyledFooter, FlexItems, LinkSocial, IconSocial, TypographyFooter, Waves, ListISocialFooter,
     ListItemSocialFooter, ListLinkSocialFooter, ListLinkMenuFooter};