import styled, { keyframes } from "styled-components";




const AnimatedImageJob = keyframes`

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


const ImageJob = styled.img`
    width: auto;
	animation: ${AnimatedImageJob} 8s linear 0s infinite;

`;

const DescriptionText = styled.p`
font-weight: 500;
font-size: 25px;
text-align: center;
color: rgba(57, 53, 54, 0.9);
`;

const NumberCounterText = styled.h3`
	font-weight: 800;
	font-size: 65px;
	line-height: 35px;
	text-align: center;
	color: #393536;
	margin-bottom: 1.5rem;

`;
const TextCounterDescription = styled.p`
	font-weight: 700;
	font-size: 24px;
	text-align: center;
	color: #393536;
`;

const BoxItem = styled.div`
	margin-top: 1.2rem;
	margin-bottom: 1.2rem;
`;

const BoxFlex = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;
	margin-top: 3rem;
`;

export {ImageJob, DescriptionText, NumberCounterText, BoxFlex, BoxItem, TextCounterDescription};