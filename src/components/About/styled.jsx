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

	@media (max-width: 792px) {
		width: 100%;
	}
`;

const BoxFlex = styled.div`
	display: flex;
	justify-content: space-evenly;
	gap: 3rem;
	margin-top: 3rem;
`;

 const Tabs = styled.div`
  overflow: hidden;
  border-bottom: 5px solid #FCA61F;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  @media (max-width: 792px) {
	display: flex;
    flex-direction: column;
    width: 100%;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

 const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-size: 14px;
  margin-right: 15px;
  color: ${props => (props.active ? "#FFFFFF" : "#8C8A97")};
  padding: 15px 10px 15px 10px;
  font-weight: 500;
  background-color: ${props => (props.active ? "#FCA61F" : "rgba(196, 196, 196, 0.15)")};
  height: 100%;

  :hover {
    background-color: ${props => (props.active ? "#FCA61F" : "rgba(196, 196, 196, 0.15)")};
  }

  @media (max-width: 792px) {
	width: 100%;
	margin-right: 0px;
    min-height: 150px;
  }
`;

const CardAboutExperience = styled.div`
	box-shadow: 0px 20px 24px 3px rgb(255 186 94 / 24%);
	//border: solid 1px #FCA61F;
	color: #393536;
	border-radius: 12px;
	width: max-content;
    padding: 15px 25px 15px 25px;
	display: flex;
	min-width: 250px;
	gap: 15px;
	align-items: center;
	margin-bottom: 25px;
	margin-top: 25px;
  	position: relative;
  	transition: 0.7s;

	:hover {
		bottom: 7px;
	}

	@media (max-width: 792px) {
		width: 100%;
		min-height: 150px;
	}
`;

const CardAboutExperienceSvg = styled.div`
	background: rgba(207, 218, 230, 0.25);
	border-radius: 12px;
	padding: 10px;
	display: flex;
    align-items: center;

	svg {
		font-size: 30px;
	}
`;
const ListAboutExperience = styled.ul`
  color: #393536;
`;
const ListItemAboutExperience = styled.li`
  	margin-left: 15px;
	margin-top: 10px;

	@media (max-width: 992px) {
		text-align: initial;
	}
`;
const TabContent = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

export {ImageJob, DescriptionText, NumberCounterText, BoxFlex, BoxItem, TextCounterDescription, CardAboutExperienceSvg,
	 Tabs, Tab, TabContent, CardAboutExperience, ListAboutExperience, ListItemAboutExperience};