import styled from "styled-components";


const FlexLg = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 20px;
    margin-right: 20px;

    @media (min-width: 792px) {
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }
`;

const BoxProject = styled.div`
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`;

const DescriptionProject = styled.p`
    max-width: 500px;
    margin-bottom: 25px;
    margin-top: 10px;
    text-align: initial;

    @media (max-width: 792px) {
        text-align: center;
    }
`;

const DescriptionProjectStatus = styled.h5`
    max-width: 500px;
    margin-bottom: 25px;
    font-weight: 700;
    margin-top: 15px;
    color: #FCA61F;
    text-align: initial;

    @media (max-width: 792px) {
        text-align: center;
    }
`;

const Bloco = styled.div`
    width: 600px;
    height: 300px;

    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 18px;
    margin-bottom: 15px;
    margin-top: 15px;
    border: 3px solid #FCA61F;

	@media (max-width: 992px) {
        width: 100%;
    }
`;
const CardSlider = styled.div`
    background-color: transparent;
    border-radius: 12px;
    padding: 15px 20px 35px 20px;

    @media (max-width: 992px) {
        padding: 10px 10px 35px 10px;
    }
`;

const CardSliderImage = styled.img`
    width: 600px;
    height: 300px;
    border-radius: 8px;
    margin-bottom: 15px;
`;

const ButtonProjectLink = styled.a`
    background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
    box-shadow: 0px 20px 24px 3px rgba(251, 161, 40, 0.42);
    border-radius: 12px;
    color: #ffffffff;
    padding: 10px;
    align-items: center;
    display: flex;

    &:hover {
        background: white;
        border: 1px solid #FCA61F;
        color: #FCA61F;
    }
      
    svg {
        font-size: 20px;
    }
`;

const BoxSkills = styled.div`
    display: flex;
    gap: 14px;
    background-color: #FCA61F;
    color: #FFFFFFFF;
    padding: 8px 15px 8px 15px;
    border-radius: 8px;

    svg {
        font-size: 20px;
    }
`;


export {FlexLg, Bloco, BoxProject, DescriptionProject,DescriptionProjectStatus, CardSlider, CardSliderImage, ButtonProjectLink, BoxSkills};
