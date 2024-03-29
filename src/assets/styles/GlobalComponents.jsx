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
    margin-left: ${props => props.left};
    transition: 0.6s;
    padding: 11px 30px 11px 30px;
    text-align: center;

  
    &:hover {
      background: white;
      border: 1px solid #FCA61F;
      color: #FCA61F;
    }

  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px!important;
  }
  
`;

const Box = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
  position: relative;
  top:  ${props => props.top};
  bottom:  ${props => props.bottom}
`;

export {ButtonPrimary, Box};