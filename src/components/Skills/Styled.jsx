import styled from "styled-components";


const Wrapper = styled.div`
    width: 500px;
    margin: 0 auto;

    @media (max-width: 792px) {
        width: 100%;
    
    }
`;

const AccordionWrapper = styled.div`
    margin-top: 0.5em;
`;

const AccordionItem = styled.div`
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;

`;

const AccordionContent = styled.div`
    padding: 20px 0px 20px 0px;

`;
const AccordionConjuntTitleAndIcon = styled.h4`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;

    svg {
        font-size: 21px;
    }
`;

const ProgressTitle = styled.h5`
    font-weight: 700;
    color: #393536;
    font-size: 15px;
`;

const AccordionTitle = styled.div`
    font-weight: 600;
    cursor: pointer;
    color: #393536;
    padding: 0.8em 1.5em;
    border: solid 1px #FCA61F;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 20px 24px 3px rgba(255, 186, 94, 0.24);;

    &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid currentColor;
    }

    &:hover {
        color: #FCA61F;
    }

`;

const AccordionBox = styled.div`
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
`;

const FlexLg = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (min-width: 992px) {
    display: flex;

    }
`;


export {Wrapper, AccordionWrapper, AccordionItem, AccordionTitle,
     AccordionContent, FlexLg, AccordionConjuntTitleAndIcon, ProgressTitle, AccordionBox};