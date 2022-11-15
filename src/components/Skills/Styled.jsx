import styled from "styled-components";


const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
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
    padding: 1em 1.5em;

`;

const AccordionTitle = styled.div`
    font-weight: 600;
    cursor: pointer;
    color: #666;
    padding: 0.5em 1.5em;
    border: solid 1px #ccc;
    border-radius: 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid currentColor;
    }

    &:hover {
        color: black;
    }

`;

const ActiveOpen = styled.div`
    &::after {
        content: "";
        border-top: 0;
        border-bottom: 5px solid;
    }

`;

const Collapsed = styled.div`
max-height: 0;
        transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
`;

export {Wrapper, AccordionWrapper, AccordionItem, AccordionTitle, AccordionContent, ActiveOpen, Collapsed};