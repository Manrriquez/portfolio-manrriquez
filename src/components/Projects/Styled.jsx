import styled from "styled-components";


const FlexLg = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (min-width: 992px) {
    display: flex;

    }
`;

const Bloco = styled.div`
    width: 600px;
    height: 400px;
    background-color: orange;
`;

export {FlexLg, Bloco};