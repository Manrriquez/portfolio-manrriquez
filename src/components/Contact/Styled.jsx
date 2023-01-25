import styled, { keyframes } from "styled-components";

const AnimationLoading = keyframes`
    to {
        -webkit-transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled.div`
    display: block;
    width: 20px;
    height: 20px;
    border: 7px solid #ffff;
    border-radius: 50%;
    border-top-color: #ffff;
    animation: ${AnimationLoading} 1s linear infinite;
`;

const BoxForm = styled.div`
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 10rem;
`;

const StyledForm = styled.form`
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    text-align: initial;
`;

const LabelContact = styled.label`
    font-weight: 600;
    font-size: clamp(16px, 3vw, 17px);
    line-height: 32px;
    color: #FCA61F;
`;

const COlMdForm = styled.div`
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    width: 50%;
    flex: 0 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
const ButtonDisabled= styled.div`

    box-shadow: 0px 20px 24px 3px rgba(251, 161, 40, 0.42);
    border-radius: 18px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    width: ${props => props.width};
    padding: 11px 30px 11px 30px;
    text-align: center;
  
    background: white;
    border: 1px solid #FCA61F;
    color: #FCA61F;

  }

  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

const BoxFLex = styled.div`
    width: 100%;
    @media (min-width: 868px) {
        display: flex;
        gap: 15px;
    }
`;

const COlForm = styled.div`
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    flex: 0 0 auto;
    width: 100%;
`;
const InputContact = styled.input`
    height: 55px;
    background: #F7F7F7;
    font-size: 16px;
    color: #717171;
    border: solid 1px #FCA61F;
    box-shadow: 0px 20px 24px 3px rgba(255, 186, 94, 0.24);
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-weight: 400;
    border-radius: 18px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;


    &:focus {
        border-color: #FCA61F;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(252 166 31 / 45%);
    }

`;

const ErrorMessage = styled.span`
    color: #FCA61F;
    font-weight: 600;
`;

const TextareaContact = styled.textarea`

    background: #F7F7F7;
        font-size: 16px;
        color: #717171;
        border: solid 1px #FCA61F;
        box-shadow: 0px 20px 24px 3px rgba(255, 186, 94, 0.24);
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-weight: 400;
        border-radius: 18px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        margin-bottom: 25px;

        &:focus {
            border-color: #FCA61F;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgb(252 166 31 / 45%);
        }
`;


export {BoxForm, StyledForm, InputContact, LabelContact, COlMdForm, COlForm, TextareaContact, ButtonDisabled, BoxFLex, ErrorMessage, LoadingSpinner};