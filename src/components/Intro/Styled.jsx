import styled, { keyframes } from "styled-components";

const HomeTitle = styled.h1`

    font-weight: 800;
    font-size: 55px;
    line-height: 65px;
    color: #FCA61F;
`;

const HomeSubtitle = styled.p`

    font-weight: 700;
    font-size: 28px;
    line-height: 25px;
    color: #393536;

`;


const HomeDescription = styled.p`

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: rgba(57, 53, 54, 0.9);
`;

const BackgroundFound = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 20rem;
`;

const AnimatedIcon = keyframes`

	0%,
	100% {
		transform: translateY(0);
	}

	10%,
	30%,
	50%,
	70% {
		transform: translateY(-8px);
	}

	20%,
	40%,
	60% {
		transform: translateY(8px);
	}

	80% {
		transform: translateY(6.4px);
	}

	90% {
		transform: translateY(-6.4px);
	}
`;


const IconAnimatedJava = styled.img`
    width: 70px;
	position: relative;
    animation: ${AnimatedIcon} 8s linear 0s infinite;
	left: 50px;
	top: 75px;
`;

const IconAnimatedApp = styled.img`
	width: 70px;
	position: relative;
	animation: ${AnimatedIcon} 8s linear 0s infinite;
	left: 35px;
	bottom: 50px;
`;

const IconAnimatedHttps = styled.img`
	width: 70px;
	position: relative;
	animation: ${AnimatedIcon} 8s linear 0s infinite;
	left: 315px;
	top: 100px;
`;

const IconAnimatedMysql = styled.img`
	width: 70px;
	position: relative;
	animation: ${AnimatedIcon} 8s linear 0s infinite;
	left: 250px;
	bottom: 30px;
`;



export {HomeTitle, HomeSubtitle, HomeDescription, BackgroundFound, IconAnimatedJava,
	 IconAnimatedApp, IconAnimatedHttps, IconAnimatedMysql};