import styled from "styled-components";


const BackgroundServiceSvg = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-color: #FCA61F;
    border-radius: 18px;
    background-size: 60%;
    max-height: 240px;
    padding: 25px 20px 25px 20px;
    background-position: right;
`;

const BoxFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: ${props => props.gap};
    position: relative;
    top: ${props => props.top};
    bottom: ${props => props.bottom};

    @media (max-width: 892px) {
        justify-content: center;
	}
`;

const BoxFlexService = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 892px) {
		display: block;
	}
`;

const TypographyTitleService = styled.p`
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 3px;
    font-size: clamp(17px, 3vw, 25px);
`;

const TypographyDescriptionService = styled.p`
    font-size: clamp(14px, 3vw, 17px);
    font-weight: 500px;
    color: #FFFFFFFF;
    max-width: 600px;

    @media (max-width: 892px) {
		max-width: 100%
	}
`;

const CardServiceTypography = styled.p`
    font-weight: 600;
    text-align: center;
    flex-direction: column;
    display: flex;
    font-size: clamp(14px, 3vw, 17px);

    svg {
        margin-left: auto;
        margin-right: auto;
        font-size: clamp(20px, 3vw, 26px);
        margin-bottom: 5px;
    }
`;

const CardService = styled.div`
    background-color: #FFFFFF;
    border: 1px solid #00000047;
    box-shadow: 0px 4px 60px rgb(0 0 0 / 35%);
    border-radius: 20px;
    padding: 20px;
    color: #4F5665;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    position: relative;
    margin-bottom: 25px;
    cursor: pointer;
    transition: 0.6s;
    animation: ${props => props.animation} 8s linear 0s infinite;

    &:hover {
        border: 1px solid #FCA61F;
        box-shadow:  0px 4px 60px rgb(255 0 0 / 35%);
        color: #FCA61F;
    }
`;

const BoxService = styled.div`
    margin-top: 35px;
    @media (max-width: 892px) {
        margin-top: 15px;
        text-align: center;
	}
`;

export {BackgroundServiceSvg, CardService, BoxFlex, TypographyTitleService, BoxFlexService, CardServiceTypography, BoxService, TypographyDescriptionService};