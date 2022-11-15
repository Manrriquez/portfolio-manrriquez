import styled from "styled-components";


const ButtonPrimary = styled.button`

    background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
    box-shadow: 0px 20px 24px 3px rgba(251, 161, 40, 0.42);
    border-radius: 18px;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 16px;
    width: ${props => props.width};
    transition: 0.2s;
    padding: 11px 26px 11px 26px;
  
  &:hover {
    background: white;
    border: 2px solid #FCA61F;
    color: #FCA61F;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Box = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

export {ButtonPrimary, Box};