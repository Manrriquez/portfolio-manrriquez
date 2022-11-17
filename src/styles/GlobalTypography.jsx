import styled from "styled-components";



const TypographyTitle = styled.h2`
    font-weight: 700;
    font-size: clamp(32px, 3vw, 42px);
    color: #393536;
    text-align: center;
`;
const TypographyDescription = styled.p`
    font-weight: 500;
    font-size: clamp(16px, 3vw, 20px);
    text-align: center;
    color: #FCA61F;
`;

export {TypographyTitle, TypographyDescription};