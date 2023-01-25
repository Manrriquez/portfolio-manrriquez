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
    margin-top: 15px;
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

export {FlexLg, Bloco, BoxProject, DescriptionProject,DescriptionProjectStatus};