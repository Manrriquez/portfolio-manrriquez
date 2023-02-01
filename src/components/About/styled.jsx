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

	@media (max-width: 792px) {
		display: none;
	}

`;

const DescriptionText = styled.p`
	font-weight: 500;
	font-size: clamp(16px, 3vw, 17px);
	color: rgba(57, 53, 54, 0.9);
`;

const NumberCounterText = styled.h3`
	font-weight: 800;
	font-size: clamp(48px, 3vw, 65px);
	line-height: 35px;
	text-align: center;
	color: #393536;
	margin-bottom: 1.5rem;

`;
const TextCounterDescription = styled.p`
	font-weight: 700;
	font-size: clamp(22px, 3vw, 24px);
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

 const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;

 const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
const TabContent = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

export {ImageJob, DescriptionText, NumberCounterText, BoxFlex, BoxItem, TextCounterDescription, Tabs, Tab, TabContent};