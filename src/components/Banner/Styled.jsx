import styled, { keyframes } from "styled-components";


const CardBanner = styled.div`
    padding: 1.7rem;
    border-radius: 28px;
    background-color: #FCA61F;
`;

const FlexLg = styled.div`
    justify-content: center;
    align-items: center;

    @media (min-width: 592px) {
     display: flex;

    }
`;

const ButtonSecondary = styled.button`

    background-image: linear-gradient(to bottom, #ffffff, #fff4fe, #ffe6ec, #ffddcb, #ffdda9);
    box-shadow: 0px 20px 24px 3px rgba(255, 253, 253, 0.19);
    border-radius: 18px;
    border: none;
    color: #FCA61F;
    font-weight: 600;
    font-size: clamp(14px, 3vw, 16px);
    width: ${props => props.width};
    transition: 0.2s;
    padding: 11px 26px 11px 26px;
  
  &:hover {
    background: #FCA61F;
    border: 1px solid #FFFF;
    color: #FFFF;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TypographyBanner = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: clamp(16px, 3vw, 17px);
    color: #FFFFFF;
    margin-bottom: 20px;
    max-width: 570px;
`;

const BoxBanner = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;
const AnimatedImageBanner = keyframes`

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


const ContactImage = styled.img`
    width: 100%;

    animation: ${AnimatedImageBanner} 8s linear 0s infinite;

    @media (max-width: 768px) {
      width: 300px!important;
    }
`;

export {CardBanner, FlexLg,BoxBanner, ContactImage, TypographyBanner, ButtonSecondary};