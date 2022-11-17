import styled from "styled-components";


const CardBanner = styled.div`
    padding: 1.7rem;
    border-radius: 28px;
    background-color: #FCA61F;
`;

const FlexLg = styled.div`
    justify-content: center;
    align-items: center;

    @media (min-width: 992px) {
    display: flex;

    }
`;

const ButtonSecondary = styled.button`

    background-image: linear-gradient(to bottom, #ffffff, #fff4fe, #ffe6ec, #ffddcb, #ffdda9);
    box-shadow: 0px 20px 24px 3px rgba(255, 253, 253, 0.19);
    border-radius: 18px;
    border: none;
    color: #FCA61F;
    font-weight: 600;
    font-size: 16px;
    width: ${props => props.width};
    transition: 0.2s;
    padding: 11px 26px 11px 26px;
  
  &:hover {
    background: #FCA61F;
    border: 1px solid #FFFF;
    color: #FFFF;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TypographyBanner = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 20px;
    max-width: 600px;
`;

const BoxBanner = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const ContactImage = styled.img`
    width: 100%
`;

export {CardBanner, FlexLg,BoxBanner, ContactImage, TypographyBanner, ButtonSecondary};