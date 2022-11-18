import styled from "styled-components";


const FlexLg = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (min-width: 992px) {
     display: flex;
    }
`;

const TextEducation = styled.h3`
    font-weight: 700;
    font-size: clamp(22px, 3vw, 26px);
    color: #393536;
    display: flex;
    align-items: center;
    gap: 0.7rem;

`;


export {FlexLg, TextEducation};