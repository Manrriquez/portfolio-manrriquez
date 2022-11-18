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

const Bloco = styled.div`
    width: 600px;
    height: 300px;
    background-color: orange;
`;

export {FlexLg, Bloco, BoxProject};