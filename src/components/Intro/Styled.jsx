import styled, { keyframes } from "styled-components";

const HomeTitle = styled.h1`

    font-weight: 800;
    font-size: clamp(43px, 3vw, 55px);
    line-height: 65px;
    color: #FCA61F;
`;

const HomeSubtitle = styled.p`

    font-weight: 700;
    font-size: clamp(22px, 3vw, 28px);
    line-height: 25px;
    color: #393536;

`;


const HomeDescription = styled.p`

    font-weight: 500;
    font-size: clamp(16px, 3vw, 20px);
    line-height: 25px;
    color: rgba(57, 53, 54, 0.9);
`;

const BackgroundFound = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 20rem;
	display: flex;
	justify-content: space-around;

	@media (max-width: 992px) {
		background-size: contain;
		background-position: center;
    }
	
`;


const IconAnimated = styled.img`
    width: ${props => props.width};
	height: ${props => props.height};
	position: relative;
    animation:  ${props => props.animation} 8s linear 0s infinite;
	bottom:  ${props => props.bottom};
	left:  ${props => props.left};
	top:  ${props => props.top};
`;


export {HomeTitle, HomeSubtitle, HomeDescription, BackgroundFound, IconAnimated};